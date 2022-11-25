const  fs = require('fs')
const files = fs.readdirSyncc(__dirnme)

files.forEach(f => console.log(f))