const fs = require('fs')
const { basename } = require('path')
const readline = require('readline-sync')


// check if command line is well 
if (process.argv.length !== 4) {
  console.log('Veullez ne mettre que "Le fichier à copié" et "la destination où il sera copié"\n')
  console.log('Example: node cp.js leFichieràcopier.js ../onLeColleIci.js ')
  process.exit(1)
}

// On recupere nos parametres dans 2 variables distinct
let srcName = basename(process.argv[2])
let destinationName = process.argv[3] === '.' ? srcName : process.argv[3]  // on sait tous ce que signifie ce petit point tout mimi <3 si il n'est pas present on garde la destination tel quelle

 
//-------------------- CHECK PARAMETRE 1-----------------------------------//

// check if the path to copy exist
if (!fs.existsSync(process.argv[2])) {
  console.log(`Désoler ${process.argv[2]} n\'existe pas`)
  process.exit(1)
}

//check if the value is a file or a directory 
const stats = fs.statSync(process.argv[2])
if (!stats.isFile()) {
  console.log(`${process.argv[2]} n\'est pas un fichier`)
  process.exit(1)
}


//----------------------CHECK PARAMETRE 2----------------------------------//

// check si notre chemin où nous allons collé notre nouveau fichier existe bien 
let checking = destinationName.split('/').map((a) => a)
let pathPasted = ""
for (let i = 0; i < checking.length - 1; i++) {
  pathPasted += checking[i] + '/'
  if (!fs.existsSync(pathPasted)) {
    console.log(`Désoler ${pathPasted} n\'existe pas`)
    process.exit(1)
  }
}

// check if the 3rd parameter is an existing directory/file if not paste it in the current directory
if (!fs.existsSync(destinationName)) {
  fs.copyFileSync(process.argv[2],destinationName)
  process.exit(1)
}

// now we will check if it is directory if yes we will check if the file already exist
const stats2 = fs.statSync(destinationName)
if (stats2.isDirectory()) {

  if (fs.existsSync(`${destinationName}/${srcName}`)) {
  console.log(`Désoler ${srcName} existe déjà`)
  let answer = readline.question('Voulez vous le remplacer ?\nyes [y]\nno [n]\nVotre réponse : ')
  answer === 'y' ? '' : process.exit(1)
  } 
  fs.copyFileSync(process.argv[2],`${destinationName}/${srcName}`)
  process.exit(1)
}

// check if the file we want to past already exist
// if yes then the user will be able to choose to replace it or not
if (fs.existsSync(destinationName)) {
  console.log(`Désoler ${destinationName} existe déjà`)
  let answer = readline.question('Voulez vous le remplacer ?\nyes [y]\nno [n]\nVotre réponse : ')
  answer === 'y' ? '' : process.exit(1)
}

fs.copyFileSync(process.argv[2],destinationName)