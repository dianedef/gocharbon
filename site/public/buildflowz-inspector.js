(function() {
    let inspectorEnabled = false;
    let styleElement = null;
    const buttons = [];

    var IMGBB_API_KEY = 'e6b9a93df250481a8cd214fbfbb8e7ba';

    // Load Eruda console for mobile debugging
    (function loadEruda() {
        if (window.eruda) return;
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/eruda';
        script.onload = function() {
            eruda.init();
            console.log('BuildFlowz: Eruda console loaded');
        };
        document.head.appendChild(script);
    })();

    function loadHtml2Canvas() {
        return new Promise(function(resolve, reject) {
            if (window.html2canvas) return resolve(window.html2canvas);
            var script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
            script.onload = function() { resolve(window.html2canvas); };
            script.onerror = function() { reject(new Error('Failed to load html2canvas')); };
            document.head.appendChild(script);
        });
    }

    function captureElement(el) {
        el.classList.remove('buildflowz-outline');
        var btns = el.querySelectorAll('.buildflowz-button');
        btns.forEach(function(b) { b.style.display = 'none'; });

        return loadHtml2Canvas().then(function(html2canvas) {
            return html2canvas(el, { useCORS: true });
        }).finally(function() {
            el.classList.add('buildflowz-outline');
            btns.forEach(function(b) { b.style.display = ''; });
        });
    }

    function screenshotCopyClipboard(el) {
        captureElement(el).then(function(canvas) {
            return new Promise(function(resolve) { canvas.toBlob(resolve, 'image/png'); });
        }).then(function(blob) {
            return navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
        }).then(function() {
            console.log('Screenshot copied to clipboard');
        }).catch(function(err) {
            console.error('Clipboard copy failed:', err);
        });
    }

    function screenshotDownload(el) {
        captureElement(el).then(function(canvas) {
            var link = document.createElement('a');
            link.download = 'buildflowz-screenshot.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            console.log('Screenshot downloaded');
        }).catch(function(err) {
            console.error('Download failed:', err);
        });
    }

    function screenshotUpload(el) {
        captureElement(el).then(function(canvas) {
            var base64 = canvas.toDataURL('image/png').split(',')[1];
            var formData = new FormData();
            formData.append('key', IMGBB_API_KEY);
            formData.append('image', base64);
            formData.append('expiration', '600');
            return fetch('https://api.imgbb.com/1/upload', { method: 'POST', body: formData });
        }).then(function(res) { return res.json(); })
        .then(function(data) {
            if (data.success) {
                var url = data.data.url;
                navigator.clipboard.writeText(url).then(function() {
                    console.log('Image URL copied:', url);
                });
            } else {
                console.error('Upload failed:', data);
            }
        }).catch(function(err) {
            console.error('Upload error:', err);
        });
    }

    function showScreenshotMenu(el, x, y) {
        console.log('BuildFlowz: showScreenshotMenu called at', x, y);
        var existing = document.getElementById('buildflowz-screenshot-menu');
        if (existing) existing.remove();

        var menu = document.createElement('div');
        menu.id = 'buildflowz-screenshot-menu';
        menu.style.cssText = 'position:fixed;z-index:99999;background:#222;border-radius:8px;padding:4px 0;box-shadow:0 4px 16px rgba(0,0,0,.4);font-family:system-ui,sans-serif;font-size:14px;min-width:180px;';
        menu.style.left = x + 'px';
        menu.style.top = y + 'px';
        console.log('BuildFlowz: Menu created and positioned');

        var items = [
            { label: 'Copier (clipboard)', action: function() { screenshotCopyClipboard(el); } },
            { label: 'Télécharger PNG', action: function() { screenshotDownload(el); } },
            { label: 'Upload + copier URL', action: function() { screenshotUpload(el); } }
        ];

        items.forEach(function(item) {
            var btn = document.createElement('div');
            btn.textContent = item.label;
            btn.style.cssText = 'padding:8px 16px;color:#fff;cursor:pointer;transition:all 0.15s;';
            btn.addEventListener('mouseenter', function() { btn.style.background = '#444'; });
            btn.addEventListener('mouseleave', function() { btn.style.background = 'none'; });

            btn.addEventListener('touchstart', function() {
                btn.style.background = '#555';
                btn.style.transform = 'scale(0.95)';
            });

            function handleAction(e) {
                e.stopPropagation();
                e.preventDefault();
                // Haptic feedback
                if (navigator.vibrate) navigator.vibrate(40);
                // Visual feedback
                btn.style.background = '#666';
                setTimeout(function() {
                    menu.remove();
                    item.action();
                }, 100);
            }

            btn.addEventListener('click', handleAction);
            btn.addEventListener('touchend', handleAction);
            menu.appendChild(btn);
        });

        document.body.appendChild(menu);

        function closeMenu(e) {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', closeMenu);
                document.removeEventListener('touchstart', closeMenu);
            }
        }
        setTimeout(function() {
            document.addEventListener('click', closeMenu);
            document.addEventListener('touchstart', closeMenu);
        }, 100);
    }

    function generateXPath(element) {
        if (element.id) {
            return '//*[@id="' + element.id + '"]';
        }

        var parts = [];
        var current = element;

        while (current && current.nodeType === Node.ELEMENT_NODE) {
            var tagName = current.tagName.toLowerCase();

            // Stop at body
            if (tagName === 'body') {
                parts.unshift('/body');
                break;
            }

            // If element has id, use it and stop
            if (current.id) {
                parts.unshift('//*[@id="' + current.id + '"]');
                break;
            }

            // Calculate position among siblings of same tag
            var index = 1;
            var sibling = current.previousElementSibling;
            while (sibling) {
                if (sibling.tagName.toLowerCase() === tagName) {
                    index++;
                }
                sibling = sibling.previousElementSibling;
            }

            // Check if index is needed (multiple siblings of same tag)
            var needsIndex = false;
            sibling = current.nextElementSibling;
            while (sibling) {
                if (sibling.tagName.toLowerCase() === tagName) {
                    needsIndex = true;
                    break;
                }
                sibling = sibling.nextElementSibling;
            }

            if (index > 1 || needsIndex) {
                parts.unshift('/' + tagName + '[' + index + ']');
            } else {
                parts.unshift('/' + tagName);
            }

            current = current.parentElement;
        }

        return parts.join('');
    }

    var zoomHandler = null;

    function getNestingDepth(el) {
        var depth = 0;
        var parent = el.parentElement;
        while (parent) {
            if (parent.classList && parent.classList.contains('buildflowz-outline')) {
                depth++;
            }
            parent = parent.parentElement;
        }
        return depth;
    }

    function depthColor(depth) {
        var fade = Math.min(220, depth * 40);
        return 'rgb(255,' + fade + ',' + fade + ')';
    }

    function updateButtonScales() {
        var scale = window.visualViewport ? window.visualViewport.scale : 1;
        var inverseScale = 1 / scale;
        buttons.forEach(function(btn) {
            btn.style.transform = 'translateY(-50%) scale(' + inverseScale + ')';
        });
    }

    function flashElement(div) {
        var color = div.style.outline ? div.style.outline.match(/rgb\([^)]+\)/)[0] : '#FF0000';
        div.style.transition = 'box-shadow 0.15s ease-in';
        div.style.boxShadow = 'inset 0 0 0 3px ' + color + ', 0 0 12px ' + color;
        setTimeout(function() {
            div.style.transition = 'box-shadow 0.4s ease-out';
            div.style.boxShadow = '';
        }, 250);
    }

    function enableInspector() {
        if (inspectorEnabled) return;
        inspectorEnabled = true;

        styleElement = document.createElement('style');
        styleElement.textContent = '\
        .buildflowz-outline {\
            position: relative;\
        }\
        .buildflowz-button {\
            position: absolute;\
            top: 0;\
            transform-origin: left bottom;\
            color: white;\
            padding: 4px 9px;\
            font-size: 13px;\
            font-weight: bold;\
            border: none;\
            border-radius: 4px;\
            z-index: 9999;\
            line-height: 1;\
            pointer-events: auto;\
            cursor: pointer;\
        }';
        document.head.appendChild(styleElement);

        // Calculate max nesting depth across all divs
        var divs = document.querySelectorAll('div');
        var maxDepth = 0;
        divs.forEach(function(div) {
            div.classList.add('buildflowz-outline');
            var d = getNestingDepth(div);
            if (d > maxDepth) maxDepth = d;
        });

        divs.forEach(function(div, index) {
            var depth = getNestingDepth(div);
            var color = depthColor(depth);
            div.style.setProperty('outline', '1px solid ' + color, 'important');
            div.style.setProperty('outline-offset', '-' + (depth * 2) + 'px', 'important');

            // Position button proportionally: spread from 0% to 70% based on depth/maxDepth
            var leftPercent = maxDepth > 0 ? (depth / maxDepth) * 85 : 0;

            var button = document.createElement('button');
            button.textContent = index + 1;
            button.classList.add('buildflowz-button');
            button.setAttribute('data-depth', depth);
            button.style.left = leftPercent + '%';
            button.style.background = color;
            button.style.color = depth > 3 ? '#333' : '#fff';
            div.appendChild(button);
            buttons.push(button);

            (function(targetDiv, btn) {
                var pressTimer = null;
                var longPressed = false;

                function startPress(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    longPressed = false;
                    var touch = e.touches ? e.touches[0] : e;
                    var px = touch.clientX;
                    var py = touch.clientY;
                    console.log('BuildFlowz: Press started');

                    // Visual feedback
                    btn.style.transform = 'scale(0.9)';
                    btn.style.transition = 'transform 0.1s';

                    pressTimer = setTimeout(function() {
                        longPressed = true;
                        console.log('BuildFlowz: Long press detected, showing menu');
                        // Haptic feedback for long press
                        if (navigator.vibrate) navigator.vibrate(50);
                        showScreenshotMenu(targetDiv, px, py);
                    }, 600);
                }

                function endPress(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    clearTimeout(pressTimer);
                    console.log('BuildFlowz: Press ended, longPressed=' + longPressed);

                    // Reset visual feedback
                    btn.style.transform = 'scale(1)';

                    if (!longPressed) {
                        // Haptic feedback for short press
                        if (navigator.vibrate) navigator.vibrate(30);
                        flashElement(targetDiv);
                        var xpath = generateXPath(targetDiv);
                        navigator.clipboard.writeText(xpath).then(function() {
                            console.log('XPath copied: ', xpath);
                        });
                    }
                }

                function cancelPress(e) {
                    console.log('BuildFlowz: Press cancelled');
                    clearTimeout(pressTimer);
                }

                btn.addEventListener('mousedown', startPress);
                btn.addEventListener('mouseup', endPress);
                btn.addEventListener('mouseleave', cancelPress);
                btn.addEventListener('touchstart', startPress);
                btn.addEventListener('touchend', endPress);
                btn.addEventListener('touchcancel', cancelPress);
            })(div, button);
        });

        updateButtonScales();
        if (window.visualViewport) {
            zoomHandler = updateButtonScales;
            window.visualViewport.addEventListener('resize', zoomHandler);
        }
    }

    function disableInspector() {
        if (!inspectorEnabled) return;

        if (window.visualViewport && zoomHandler) {
            window.visualViewport.removeEventListener('resize', zoomHandler);
            zoomHandler = null;
        }

        if (styleElement && styleElement.parentNode === document.head) {
            document.head.removeChild(styleElement);
        }

        buttons.forEach(function(button) {
            if (button.parentNode) {
                button.parentNode.removeChild(button);
            }
        });
        buttons.length = 0;

        document.querySelectorAll('.buildflowz-outline').forEach(function(div) {
            div.classList.remove('buildflowz-outline');
            div.style.removeProperty('outline');
            div.style.removeProperty('outline-offset');
            div.style.removeProperty('box-shadow');
            div.style.removeProperty('transition');
        });

        inspectorEnabled = false;
    }

    function toggleInspector() {
        if (inspectorEnabled) {
            disableInspector();
        } else {
            enableInspector();
        }
    }

    function initToggleButton() {
        var toggleButton = document.createElement('button');
        toggleButton.id = 'buildflowz-inspector-toggle';
        toggleButton.textContent = '\uD83D\uDD0D';
        toggleButton.title = 'Toggle Web Inspector';
        toggleButton.style.cssText = 'position:fixed;top:10px;right:10px;z-index:10000;background:#333;color:#fff;border:none;border-radius:50%;width:40px;height:40px;font-size:20px;cursor:pointer;box-shadow:0 2px 5px rgba(0,0,0,0.3);';
        toggleButton.addEventListener('click', toggleInspector);
        document.body.appendChild(toggleButton);
    }

    if (!window.__buildflowzInspectorLoaded) {
        window.__buildflowzInspectorLoaded = true;
        initToggleButton();
    }
})();