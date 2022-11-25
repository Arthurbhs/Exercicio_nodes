function temParam(param) {
    return process.argv.indexOf(param) !== -1

}

if(temParam('--produção')) {
    console.log('Atenção total')
} else {
    console.log('Tranquilo')
}