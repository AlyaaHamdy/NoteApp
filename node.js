const fs = require('fs')
fs.writeFileSync('note.txt','Hello')
console.log(fs.readFileSync('note.txt').toString())

fs.appendFileSync('note.txt','   Alyaaaa')
console.log(fs.readFileSync('note.txt').toString())





const data = require('./data')
console.log(data)
console.log(data.firstName)
console.log(data.lastName)
console.log(data.adding(4,4))
 var validator = require('validator');
 console.log(validator.isEmail('alyaa'));
 console.log(process.argv)
 

  if(process.argv[2]==='add'){
      console.log('AddItem')
  }else if (process.argv[2]==='remove'){
      console.log('Deleteitem')
  }else{
    console.log('Error')
  }
  const yargs = require ('yargs')
  //////////////////////////////////////////////////////////////////////////////
  /////first version
 
//    yargs.command({
//        command:'add',
//        describe:('Add Notes'),
//        handler:()=>{
//            console.log('Add notes')
//        }
//    })
//    yargs.command({
//     command:'delete',
//     describe:('Delete Notes'),
//     handler:()=>{
//         console.log('Delete notes')
//     }
//    })

//    yargs.command({
//     command:'Read',
//     describe:('Read Notes'),
//     handler:()=>{
//         console.log('newww notes')
//     }
//     })

//     yargs.command({
//         command:'list',
//         describe:('List Notes'),
//         handler:()=>{
//             console.log('List these notes')
//     }
//     })
////////////////////////////////////////////////
///s version
const notes = require('./notes')
yargs.command({
         command:'add',
         describe:('Add Notes'),
         builder:{
             title:{
                 describe:'This is title description in add command',
                 type:'string',
                 demandOption:true

             },
             body:{
                describe:'This is body description in add command',
                type:'string',
                demandOption:true

             }
         },
         handler:()=>{
             notes.addNote(yargs.argv.title,yargs.argv.body)
         }
     })
     yargs.command({
      command:'delete',
      describe:('Delete Notes'),
      builder:{
        title:{
            describe:'This is title description in delete command',
            type:'string',
            demandOption:true

        },
        
    },
      handler:()=>{
        notes.deleteNote(yargs.argv.title)
        }
      })
    
     yargs.command({
      command:'read',
      describe:('Read Notes'),
      builder:{
        title:{
            describe:'This is title description in read command',
            type:'string',
            demandOption:true

        },
        
    },
      
      handler:()=>{
        notes.readNote(yargs.argv.title)}

      })
     
      yargs.command({
          command:'list',
          describe:('List Notes'),
          handler:()=>{
              notes.listNotes()

      }
    
 
    })
 
 
 yargs.parse()



 
 // console.log(yargs.argv)





 ////console.log(fs.readFileSync('note.txt').toString())
//  const os = require ('os')

//  console.log(hostname())
//  console.log('host arch :${os.arch()}')
//  console.log('host platform :${os.platform()}')
//  console.log('host type :${os.type()}')
