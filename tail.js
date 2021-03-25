const fs = require('fs')
let n = 10                                          //index qui sera déterminé par l'utilisateur si flag demandé -n
const FILE = process.argv.length - 1                //cible toujours notre fichier si le flag est appellée

// check if command line is well 
if (process.argv.length < 3 || process.argv.length > 5) {
  console.log(`Veuillez mettre un fichier à afficher`)
  process.exit(1)
}
if (process.argv.length === 4) {
  console.log('pour l\'utilisation du flag veuillez faire comme l\'example')
  console.log('Example: node tail.js -n 20 file.txt')
  process.exit(1)
}
//check if flag is active
if (process.argv.length === 5){
  if (process.argv[2] !== '-n' || isNaN(Number(process.argv[3]))){
    console.log('pour l\'utilisation du flag veuillez faire comme l\'example')
    console.log('Example: node tail.js -n 20 file.txt')
    process.exit(1)
  } else {
    n = Number(process.argv[3])
  }
}

// check if the path exist
if (!fs.existsSync(process.argv[FILE])) {
  console.log(`Error: ${process.argv[FILE]} n'existe pas`)
  process.exit(1)
}

//check if the value is a file or a directory
const stats = fs.statSync(process.argv[FILE])

if (!stats.isFile(process.argv[FILE])) {
  console.log(`${process.argv[FILE]} n\'est pas un fichier`)
  process.exit(1)
}

content = fs.readFileSync(process.argv[FILE], 'utf-8').split('\n')
let contentToDisplay = ''
for (let i = content.length - n; i < content.length; i++) {
   i + 1 < content.length ? contentToDisplay += content[i] + '\n' : contentToDisplay += content[i]
}

console.log(contentToDisplay)