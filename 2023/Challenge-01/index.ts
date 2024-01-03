import fs from 'node:fs'

const start: number = Date.now()

const counter = (message: string) => {
  const arr = message.split(' ')
  const str = new Array<string>()
  const nums = new Array<number>()

  arr.forEach((v: string) => {
    if (str.includes(v)) {
      nums[str.indexOf(v)] = nums[str.indexOf(v)] + 1
    } else {
      str.push(v)
      nums.push(1)
    }
  })

  const data = str.map(( v: string, i: number) => {
    return `${str[i]}${nums[i]}`
  })

  return data.join('')
}

fs.readFile('./2023/Challenge-01/file.txt', 'utf-8', async (err, data) => {
  if (err) throw err
  console.log(counter(data))
  console.log(`Execution time: ${Date.now() - start} ms`)
})