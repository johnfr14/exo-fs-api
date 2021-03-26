const fs = require('fs')
const FILE = process.argv[process.argv.length - 1]

// check if command line is well 
if (process.argv.length < 3 || process.argv.length > 4) {
  process.argv.length > 4 ? console.log('Pour l\'utilisation d\'un flag veuillez mettre en premier parametre ["-l", "-w", "-c"] puis le nom du fichier') : '' 
  console.log('Veuillez mettre un fichier en parametre')
  process.exit(1)
}

// check if the path exist
if (!fs.existsSync(FILE)) {
  console.log(`Désoler ${FILE} n\'existe pas`)
  process.exit(1)
}

// Recuperation du contenu du fichier
const TEXT = fs.readFileSync(FILE, 'utf-8')

// Si Flag le est activé
if (process.argv.length === 4) {
  switch (process.argv[2]) {
    case '-l':
      let countLine = TEXT.split("\n").length
      console.log(`${countLine} ${FILE}`)
      break
    case '-w':
      let countWord = TEXT.split(" ").length
      console.log(`${countWord} ${FILE}`)
      break
    case '-c':
      let countChar = TEXT.split("").length
      console.log(`${countChar} ${FILE}`)
      break
    default:
      console.log('Pour l\'utilisation d\'un flag veuillez mettre en premier parametre ["-l", "-w", "-c"] puis le nom du fichier')
  }
  process.exit(1)
}

// Si le Flag n'est pas activé
let countLine = TEXT.split("\n").length
let countWord = TEXT.split(" ").length
let countChar = TEXT.split("").length

console.log(`${countLine} ${countWord} ${countChar} ${FILE}`)