const yts = require( '../src/index.js' )

// https://www.youtube.com/watch?v=X9vrfEoc8_g
// const opts = { videoId: 'e9vrfEoc8_g' }
// const opts = { videoId: '_JzeIf1zT14' }
const opts = { videoId: '-RcuLY-11ho' }

yts( opts, function ( err, video ) {
  console.log( video )
} )

