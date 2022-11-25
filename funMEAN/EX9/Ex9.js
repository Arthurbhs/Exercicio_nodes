process.stdout.write('esta gostando do curso?')
proces.stdin.on('data', function(data) {
    process.stdout.write(`Sua respostta foi ${data.toString()}Obrigado\n`)
    process.exit()
})