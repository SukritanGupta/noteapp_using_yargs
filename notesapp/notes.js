const fs = require('fs');
const getNotes = () => {
        return "Your Notes";
    }
    // here i write a method for the adding the notes
const addNote = function(title, body) {
        const notes = loadNotes()
        const duplicateNotes = notes.filter(function(note) {
            return note.title === title
        })
        const duplicateNote = notes.find((note) => note.title === title)
        if (!duplicateNote) {
            notes.push({
                title: title,
                body: body

            })
            saveNotes(notes)
            console.log('New Note added')
        } else {
            console.log('Note title taken!')
        }
    }
    // here i write the method for deleting the notes
const removeNote = function(title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note) {
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        console.log("Note removed !")
    } else {
        console.log("no note found")
    }

    saveNotes(notesToKeep)
}

// here i save the notes in the file
const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function() {
        try {
            const dataBuffer = fs.readFileSync('notes.json')
            const dataJSON = dataBuffer.toString()
            return JSON.parse(dataJSON)
        } catch (error) {
            return []
        }

    }
    // here we write the removeNode function

// here i make the list method

const listNotes = function() {
        const notes = loadNotes()
        console.log('Your notes')
        notes.forEach(element => {
            console.log(element.title)
        });
    }
    // here i make the reading method 
const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => note.title === title)
    console.log('able to read')
    if (note) {
        console.log(note.title)
        console.log(note.body)
        console.log("yeah i am able to read the data")
    } else {
        console.log('note not found')
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

// module.exports = notes