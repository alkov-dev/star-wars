// config-overrides.js
const {alias} = require('react-app-rewire-alias')


module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',  
        '@constants': 'src/constants',
        '@hoc-helpers': 'src/hoc-helpers',
        '@containers': 'src/containers',
        '@services': 'src/services',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
        '@routes': 'src/routes',
        '@static': 'src/static',
        '@hooks': 'src/hooks',
        '@ui': 'src/components/UI'
        // '@store': 'src/store'

        // '@NotFoundPage': 'src/NotFoundPage'

    })(config)
    //do stuff with the webpack config...
    return config;
}