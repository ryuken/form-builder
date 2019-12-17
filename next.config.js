const path = require("path")
const withCss = require("@zeit/next-css")
const withSass = require("@zeit/next-sass")

module.exports = withCss(withSass({
    poweredByHeader: false,
    webpack: (cfg) => {

        //cfg.resolve.alias["components"] = path.resolve(__dirname, 'components/')

        return cfg
    }
}))