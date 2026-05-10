module.exports = {
  apps: [{
    name: "gocharbon",
    cwd: __dirname,
    script: "bash",
    args: ["-lc", "export PORT=3014 && flox activate -- bash -lc 'pnpm dev -- --port 3014'"],
    env: {
      PORT: 3014
    },
    autorestart: true,
    watch: false
  }]
};
