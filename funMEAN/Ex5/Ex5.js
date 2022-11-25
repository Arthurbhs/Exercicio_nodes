console.log( global === this)
console.log( module === this)
console.log (module.exports === this)

this.hiSpeack = function () {
    console.log('hi')
}