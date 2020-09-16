# tineegq / API
api wrapper for tineegq
```bash
npm i tineegq
```
how to use"
```js
const tinees = require('tineegq');
const tinee = new tinees()

// NSFW Endpoints
tinee.nsfw("thighs").then(img => {
    console.log(img)
})

// SFW Endpoints
tinee.sfw("pat").then(img => {
    console.log(img)
})

```

# endpoints

### || NSFW  ||

- ass 
- boobs 
- feet 
- gifs 
- hboobs 
- hentai 
- kink 
- thighs 
- yuri


### || SFW  ||

- kiss
- hug
- pat

For an up to date list on endpoints visit [tinee.gq](https://tinee.gq/api/info.html)

For support join our [discord](https://discord.gg/invite/bSNzEkq)
