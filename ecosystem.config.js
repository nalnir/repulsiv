module.exports = {


    apps: [
        // First application
        {
            name: 'ye',
            script: 'sudo node ./server/index.js',
            env: {
                COMMON_VARIABLE:
                    'true'
            },
            env_production: {

                NODE_ENV:
                    'production'

            }

        },

    ],



    /**
    
    * Deployment section
    
    * http://pm2.keymetrics.io/docs/usage/deployment/
    
    */

    deploy: {

        production: {

            key: '/Users/Juico/.ssh/id_rsa',

            user: 'ubuntu',

            // key: "/Users/Juico/.ssh/id_rsa",

            host: ['18.219.85.255'],

            ref: 'origin/master',

            ssh_options: ["StrictHostKeyChecking=no", "PasswordAuthentication=no", "ForwardAgent=yes"],

            repo: 'git@github.com:nalnir/repulsiv.git',

            path: '/yecchy',

            'pre-setup':
                "ls -la; sudo mkdir /yecchy ; sudo chown -R ubuntu.ubuntu /yecchy ; " +
                "sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - ; " +
                "sudo apt-get install -y nodejs ; " +
                "sudo npm install pm2 -g ; ",
            'pre-deploy':
                'sudo mkdir /yecchy ; ' +
                'sudo mkdir /yecchy/source ; sudo mkdir /yecchy/shared ;' +
                'sudo chown -R ubuntu.ubuntu /yecchy',
            'pre-deploy-local':
                "echo 'This is a local executed command'",
            'post-deploy':
                'sudo npm install && ' +
                'sudo pm2 reload ecosystem.config.js --env production '
             //   'sudo pm2 restart ch && ' +
             //   'sudo pm2 start'
        },
    }
};