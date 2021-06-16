const axios = require('axios');
const rateLimit = require('axios-rate-limit');

class ExampleLibary {
    constructor(config = {
        hostname: '',
        accessToke: '',
        user: '',
        pass: ''
    }) {
        this.CONFIG = config;
        this.axiosRate = rateLimit(
            axios.create(), {
                maxRequest: 2,
                perMilliseconds: 1000,
                maxRPS: 2
            }
        );
    }

    getURL(relativeRoute) {
        const CONFIG = this.CONFIG;
        return `https://${CONFIG.hostname}${relativeRoute}`;
    }

}

module.exports = ExampleLibary;