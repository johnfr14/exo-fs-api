if (process.argv.length < 3) {
  console.log(`Veuillez mettre au moins 1 parametre `)
  process.exit(1)
}

let echo = []
for (let i = 2; i <= process.argv.length; i++) {
  echo.push(process.argv[i])
}

console.log(echo.join(' '))