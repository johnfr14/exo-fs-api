if (process.argv.length < 3) {
  console.log(`Veuillez mettre au moins 1 parametre `)
  process.exit(1)
}

let [,coucou, ...echo] = process.argv

console.log(echo.join(' '));