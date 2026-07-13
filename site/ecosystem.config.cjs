module.exports = {
  apps: [{
    name: "gocharbon_site",
    cwd: "/home/claude/gocharbon/site",
    script: "bash",
    args: ["-lc", "export PORT=3014 && flox activate -- bash -lc 'pnpm dev -- --port 3014'"],
    env: {
      PORT: 3014
    },
    autorestart: true,
    max_restarts: 3,
    min_uptime: "10s",
    restart_delay: 2000,
    watch: false
  }]
};
