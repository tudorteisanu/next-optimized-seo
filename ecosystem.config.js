module.exports = {
  apps: [{
    name: 'nextjs-landing',
    script: 'server.js',
    instances: 'max',
    exec_mode: 'cluster',
    watch: false,
    env: {
      NODE_ENV: 'production',
      PORT: 3003,
      HOSTNAME: '0.0.0.0'
    }
  }]
}
