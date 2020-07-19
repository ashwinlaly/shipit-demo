module.exports = shipit => {
    require('shipit-deploy')(shipit)
    require('shipit-shared')(shipit)

    const appName = 'Ship It Demo'

    shipit.initConfig({
        default : {
            deployTo : '/home/ashwin/shipit',
            repositoryUrl : 'https://github.com/ashwinlaly/shipit-demo.git',
            keepReleases: 5,
            shared: {
                overwrite: true,
                dirs: ['node_modules']
            }
        },
        production: {
            servers: 'ashwin@172.16.22.2'
        }
    });

    const path = require('path');
    const ecosystemFilePath = path.join(
      shipit.config.deployTo,
      'shared',
      'ecosystem.config.js'
    );
}