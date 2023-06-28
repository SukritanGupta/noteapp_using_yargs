const fs = require('fs')
    /*         

    here i tell the concept of the writing the data in the json file 
    and also reteriving the data from the json file
    */

// here i tell the concept of making the json file

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holidays'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// fs.writeFileSync('1-json.json', bookJSON)




// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)


// her i tell the concept of the reading the json file

const dataBuffer = fs.readFileSync("1-json.json") //here i read in the binary and garbage format
console.log(typeof(dataBuffer))
    // const dataJSON = dataBuffer.toString()
    // const data = JSON.parse(dataJSON)

// console.log(data.title)
// console.log(data.author)