const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withOptimizedImages = require('next-optimized-images');
const withImages = require('next-images')


module.exports = withImages()
module.exports = withCSS();
module.exports = withOptimizedImages({
  /* config for next-optimized-images */
 
  // your config for other plugins or the general next.js here...
});
module.exports = withSass({
    cssModules: true
  })

  module.exports = ()=>{

    return withSass(withCSS(withImages(
        {
            /* config options for all phases except development here */

            serverRuntimeConfig: { // Will only be available on the server side
            },
            publicRuntimeConfig: { // Will be available on both server and client
            }
        }
    )))
}
