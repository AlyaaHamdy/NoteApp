//logic add/delete/read/list

const fs = require('fs')
const { title } = require('process')
/////////////////////first version

// const addNote =(title,body)=>{
//     const notes = loadNotes()
//     notes.push({
//         title,
//         body
//     })
//     saveNotes(notes)
// }


// const loadNotes = () =>{
//     try{
//         const data = fs.readFileSync('notes.json').toString()

//         return JSON.parse(data)
//     }catch(e){
//         return[]
//     }

// }


// const saveNotes = (notes) =>{
//     const saveData = JSON.stringify(notes)
//     fs.writeFileSync('notes.json',saveData)
// }
//////////////////////////second version
const addNote =(title,body)=>{
    const notes = loadNotes()
    const duplicateTitle = notes.find((note)=>{
        return note.title === title
    })
    console.log(duplicateTitle)

    if (!duplicateTitle){
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log('saved Successfully')
    }
    else{
        console.log('Error duplicate title')

    }

    }
    ///////Delete
    const deleteNote =(title) =>{
        const notes =loadNotes()
        const notesToKeep = notes.filter((obj)=>{
            return obj.title !== title
        })
        if(notes.length !== notesToKeep.length){
            saveNotes(notesToKeep)
            console.log('Removed')

        }else{
            console.log('not found')

        }

        // console.log(notes)
        // console.log(notesToKeep)
        
    }
    ///////////////////read note

    const readNote = (title) =>{
        const notes = loadNotes()
        const notesToRead = notes.find((note)=>{
            return note.title === title

        })
        if(notesToRead){
            console.log(notesToRead.title,notesToRead.body)
            

        }else{
            console.log('Not Found')

        }

    }
    /////////////////////////////////list Notes
    const listNotes = () =>{
        const notes = loadNotes()
        notes.forEach(el => {
            console.log(el.title)
            
        });
    }











    


const loadNotes = () =>{
    try{
        const data = fs.readFileSync('notes.json').toString()

        return JSON.parse(data)
    }catch(e){
        return[]
    }

}


const saveNotes = (notes) =>{
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}














module.exports ={
    addNote,
    deleteNote,
    readNote,
    listNotes
}