const { Command } = require('commander')
const moment = require('moment')
const fs = require('fs')
const program = new Command()
const filename = moment().format('yyyy-mm-dd:hh:mm:ss')

program.version('1.0.0')
program
    .argument('<source>', 'file source')
    .option('-t, --type <type>', 'conversion type')
    .option('-o, --output <output>', 'file output')
    .action((data, flags) => {


        if(flags.type == "json")
        {
            const dir = fs.readFileSync(data)
            const jsondata = JSON.parse(dir)
            if(flags.output == null)
            {
                fs.writeFileSync(`./tests/json/${filename}.json`, JSON.stringify(jsondata))
                console.log(`your file saved to ./test/json/${filename}.json`)
            }
            else
            {
                fs.writeFileSync(flags.output, JSON.stringify(jsondata))
                console.log(`your file saved to ${flags.output}`)
            }
        }
        else
        {
            const dir = fs.readFileSync(data, 'utf-8')

            if(flags.output == null)
            {
                fs.writeFileSync(`./tests/txt/${filename}.txt`, dir)
                console.log(`your file saved to ./test/txt/${filename}.txt`)
            }
            else
            {
                fs.writeFileSync(flags.output, dir)
                console.log(`your file saved to ${flags.output}`)
            }
        }
    })

program.parse(process.argv)
