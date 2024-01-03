import fs from 'node:fs'

const start: number = Date.now()

const compiler = (message: string) => {

  const arr = new Array<number>()
  let number: number = 0

  interface Operationals {
    [i: string]: () => number
  }

  const operations: Operationals = {
    '#': () => number++,
    '@': () => number--,
    '*': () => number = (number)*(number),
    '&': () => { arr.push(number); return number }
  }

  message.split('').forEach((v: string) => operations[v]())

  return arr.join('')
}

fs.readFile('./2023/Challenge-02/file.txt', 'utf-8', async (err, data) => {
  if (err) throw err
  console.log(compiler(data))
  console.log(`Execution time: ${Date.now() - start} ms`)
})