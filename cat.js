const fs = require('fs')

// check if command line is well 
if (process.argv.length < 3) {
  console.log(`Veuillez mettre au moins 1 fichier à afficher`)
  process.exit(1)
}

let content = ''
for (let i = 2; i < process.argv.length; i++) {
  
  
// check if the path exist
if (!fs.existsSync(process.argv[i])) {
  console.log(`Error: ${process.argv[i]} n'existe pas`)
  process.exit(1)
}

//check if the value is a file or a directory
const stats = fs.statSync(process.argv[i])

if (!stats.isFile(process.argv[i])) {
  console.log(`${process.argv[i]} n\'est pas un fichier`)
  process.exit(1)
}

content += fs.readFileSync(process.argv[i], 'utf-8') + '\n'

}

console.log(content)