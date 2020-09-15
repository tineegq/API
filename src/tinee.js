tinee = require('./end');
fetch = require('node-fetch');

class tinee {

    /**
     * @param {String} img endpoint to search
     * @returns {String} url of image
     */

    async nsfw(img) {
        return fetch(`${tinee.base}${img}`)
        .then(res => res.json())
        .then(json =>  {
            if(json.url == undefined) throw Error(`[TINEEGQ]: ${img} is not a valid endpoint!`)
            return json.url
        })
    }
}

module.exports = tinee
