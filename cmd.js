const { Command } = require('commander')
const program = new Command()

program.version('1.0.0')
program
    .argument('<source>', 'file source')
    .option('-t, --type <type>', 'conversion type')
    .option('-o, --output <output>', 'file output')
    .action((data, flags) => {
        console.log('source', data)
        console.log('type', flags.type)
        console.log('output', flags.output)
    })

program.parse(process.argv)