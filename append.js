const fs = require('fs')
const readline = require('readline-sync')

// check if command line is well 
if (process.argv.length < 4) {
  console.log('Veullez mettre au moins "Le fichier à copié" et "la destination où il sera copié"\n')
  console.log('Example: node cp.js leFichieràcopier.js ../onLeColleIci.js ')
  process.exit(1)
}

let contentToCopy = ''

for (let i = 2; i < process.argv.length - 1; i++) {
  
  // check if the path to copy exist
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Désoler ${process.argv[i]} n\'existe pas`)
    process.exit(1)
  }

  //check if the value is a file or a directory 
  const stats = fs.statSync(process.argv[i])

  if (!stats.isFile(process.argv[i])) {
    console.log(`${process.argv[i]} n\'est pas un fichier`)
    process.exit(1)
  }
  contentToCopy += fs.readFileSync(process.argv[i])
}
// check if the file we want to past in already exist
// if yes then the user will be able to choose to add it or not
if (fs.existsSync(process.argv[process.argv.length - 1])) {
  console.log(`${process.argv[process.argv.length - 1]} existe déjà`)
  let answer = readline.question('Voulez vous ajouter ?\nyes [y]\nno [n]\nVotre réponse : ')
  answer === 'y' ? '' : process.exit(1)
}

fs.appendFileSync(process.argv[process.argv.length - 1],contentToCopy)