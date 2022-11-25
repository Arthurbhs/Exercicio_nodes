const __ = require('lodash')

const studants = [{
    name: "Joao",
    nota: 7.6
},
{
    name: "Mario",
    nota: 8.6
},{
    name: "Yasmin",
    nota: 9.0
}]




const media  = _.sumBy(studants, 'nota') / studants.length
console.log(media)