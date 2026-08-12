module.exports = {
  apps: [{
    name: 'webinde',
    cwd: '/root/webinde',
    script: 'npm',
    args: 'run dev',
    env: {
      PORT: 3000
    }
  }]
};
