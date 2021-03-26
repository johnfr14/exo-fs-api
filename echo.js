if (process.argv.length < 3) {
  console.log(`Veuillez mettre au moins 1 parametre `)
  process.exit(1)
}

let [ , , ...echo] = process.argv // recupere les commandes passées en parametres sans les 2 premieres 

console.log(echo.join(' '));