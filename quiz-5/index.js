const { calculateParkingFee } = require('./calculateParkingFee')

const hourInput = 2
const minuteInput = 10

console.log('input hour : ', hourInput)
console.log('input mimute : ', minuteInput)
console.log('price : ', calculateParkingFee(hourInput, minuteInput))
