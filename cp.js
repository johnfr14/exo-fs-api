const fs = require('fs')
const readline = require('readline-sync')

// check if command line is well 
if (process.argv.length !== 4) {
  console.log('Veullez ne mettre que "Le fichier à copié" et "la destination où il sera copié"\n')
  console.log('Example: node cp.js leFichieràcopier.js ../onLeColleIci.js ')
  process.exit(1)
}

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

// check if the destination is a directory
const stats2 = fs.statSync(process.argv[3])
if (stats2.isDirectory()) {
  if (fs.existsSync(`${process.argv[3]}/${process.argv[3]}`)) {
  console.log(`Désoler ${process.argv[3]} existe déjà`)
  let answer = readline.question('Voulez vous le remplacer ?\nyes [y]\nno [n]\nVotre réponse : ')
  answer === 'y' ? '' : process.exit(1)
  } 
  fs.copyFileSync(process.argv[2],`${process.argv[3]}/${process.argv[2]}`)
  process.exit(1)
}

// check if the file we want to past already exist
// if yes then the user will be able to choose to replace it or not
if (fs.existsSync(process.argv[3])) {
  console.log(`Désoler ${process.argv[3]} existe déjà`)
  let answer = readline.question('Voulez vous le remplacer ?\nyes [y]\nno [n]\nVotre réponse : ')
  answer === 'y' ? '' : process.exit(1)
}

fs.copyFileSync(process.argv[2],process.argv[3])