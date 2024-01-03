import fs from 'node:fs'

const start = Date.now()

fs.readFile('./2023/Challenge-01/file.txt', 'utf-8', async (err, data) => {
  if (err) throw err
  console.log(counter(data))
  console.log(`Execution time: ${Date.now() - start} ms`)
})

const counter = (message) => {
  const arr = message.toLowerCase().split(' ')
  const str = []
  const nums = []

  arr.forEach((v, i) => {
    if (str.includes(v)) {
      nums[str.indexOf(v)] = nums[str.indexOf(v)] + 1
    } else {
      str.push(v)
      nums.push(1)
    }
  })

  const data = str.map((v, i) => {
    return `${str[i]}${nums[i]}`
  })

  return data.join('')
}