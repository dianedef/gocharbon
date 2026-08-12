module.exports = {
  apps: [{
    name: "GoCharbon",
    cwd: "/home/claude/GoCharbon",
    script: "bash",
    args: ["-c", "export PORT=3014 && flox activate -- pnpm dev -- --port 3014"],
    env: {
      PORT: 3014
    },
    autorestart: true,
    watch: false
  }]
};
