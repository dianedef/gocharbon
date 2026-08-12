<template>
	<div class="vue-theme-toggle">
		<button
			class="w-12 h-12 md:w-8 md:h-8 flex items-center justify-center hover:text-green transition-colors duration-200"
			style="-webkit-tap-highlight-color: transparent;"
			aria-label="Basculer le thème"
			@click="toggleTheme"
		>
			<svg
				class="w-8 h-8 md:w-6 md:h-6"
				:class="{ 'hidden': !isDark }"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<circle cx="12" cy="12" r="5"></circle>
				<line x1="12" y1="1" x2="12" y2="3"></line>
				<line x1="12" y1="21" x2="12" y2="23"></line>
				<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
				<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
				<line x1="1" y1="12" x2="3" y2="12"></line>
				<line x1="21" y1="12" x2="23" y2="12"></line>
				<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
				<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
			</svg>
			<svg
				class="w-8 h-8 md:w-6 md:h-6"
				:class="{ 'hidden': isDark }"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			</svg>
		</button>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isProcessing = ref(false)
const isDark = ref(false)

function getTheme(): string {
	return localStorage.getItem("theme") || 
		(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
}

function updateTheme(newTheme: string) {
	if (isProcessing.value) return
	isProcessing.value = true

	try {
		document.documentElement.classList.remove("dark", "light")
		document.documentElement.classList.add(newTheme)
		localStorage.setItem("theme", newTheme)
		isDark.value = newTheme === "dark"

		window.dispatchEvent(
			new CustomEvent("theme-changed", {
				detail: { isDark: isDark.value }
			})
		)
	} finally {
		setTimeout(() => {
			isProcessing.value = false
		}, 200)
	}
}

function toggleTheme() {
	const newTheme = isDark.value ? "light" : "dark"
	updateTheme(newTheme)
}

onMounted(() => {
	isDark.value = document.documentElement.classList.contains("dark")
	updateTheme(getTheme())

	// Ajouter l'écouteur d'événement avec l'option passive
	const button = document.querySelector('.vue-theme-toggle button')
	if (button) {
		button.addEventListener('touchstart', (e) => {
			e.preventDefault()
			toggleTheme()
		}, { passive: false })
	}
})
</script>

<style scoped>
.vue-theme-toggle {
	touch-action: manipulation;
}
</style> 