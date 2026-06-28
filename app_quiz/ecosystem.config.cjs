module.exports = {
  apps: [{
    name: "gocharbon_quiz",
    cwd: "/home/claude/gocharbon/app_quiz",
    script: "bash",
    args: ["-lc", "export PORT=3020 && flox activate -- bash -lc 'pnpm dev'"],
    env: {
      PORT: 3020
    },
    autorestart: true,
    max_restarts: 3,
    min_uptime: "10s",
    restart_delay: 2000,
    watch: false
  }]
};
