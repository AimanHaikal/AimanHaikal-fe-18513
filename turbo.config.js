module.exports = {
    build: {
      packager: 'npm',
      command: 'npm run build'
    },
    run: {
      environment: {
        NODE_ENV: 'development'
      },
      command: 'npm run dev'
    }
  };
  