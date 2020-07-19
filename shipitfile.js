module.exports = shipit => {
    require('shipit-deploy')(shipit)
    require('shipit-shared')(shipit)

    const appName = 'Ship It Demo'

    shipit.initConfig({
        default : {
            deployTo : '/var/www/'
        }
    })
}