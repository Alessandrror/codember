import fs from 'node:fs'

const start = Date.now()

fs.readFile('./2023/Challenge-02/file.txt', 'utf-8', async (err, data) => {
  if (err) throw err
  console.log(compiler(data))
  console.log(`Execution time: ${Date.now() - start} ms`)
})

const compiler = (message) => {

  const arr = []
  let number = 0

  const operations = {
    '#': () => number++,
    '@': () => number--,
    '*': () => number = (number)*(number),
    '&': () => arr.push(number)
  }

  message.split('').forEach(v => operations[v]())

  return arr.join('')
}