// const command = process.argv[2];
const notes = require('./notes.js')
const yargs = require('yargs')
    // yargs return the value
console.log(yargs.argv)

// customize yargs version
yargs.version('1.1.0')

// create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        // console.log("adding a new  note", argv.title)
        // console.log('body' + argv.body)
        notes.addNote(argv.title, argv.body)
    }
}).parse()

yargs.command({
    command: "remove",
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'

        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
}).parse()

yargs.command({
    command: 'list',
    describe: 'list  the  note',
    handler: function() {
        notes.listNotes()
    }
}).parse()


yargs.command({
    command: 'read',
    describe: "read a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // it means we need to provide the title else we are not able to read the note
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }
})



// if (command === 'add') {
//     console.log('Adding note')
// } else if (command === 'remove') {
//     console.log("Removing note");
// }
console.log("welcome  to code world");