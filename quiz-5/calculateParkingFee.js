const priceModels = [
  {
    start: 0,
    end: 30,
    price: 0,
    unit: 'hour'
  },
  {
    start: 30,
    end: 180,
    price: 10,
    unit: 'hour'
  },
  {
    start: 240,
    end: 360,
    price: 20,
    unit: 'hour'
  },
  {
    start: 360,
    end: 9999,
    price: 200,
    unit: 'day'
  },
]

function calculateParkingFee(hourInput, minuteInput) {
  if (minuteInput >= 60) throw new Error('Minute should not more or equal 60')
  const sumMinute = hourInput * 60 + minuteInput
  let sumPrice = 0
  const priceModel = priceModels.find((priceModel) => {
    if (sumMinute >= priceModel.start && sumMinute < priceModel.end) {
      return priceModel
    }
  })
  
  if (priceModel.unit === 'hour') {
    const parkingHours = Math.ceil(sumMinute / 60)
    sumPrice = parkingHours * priceModel.price
  }

  if (priceModel.unit === 'day') {
    const parkingDays = Math.ceil(sumMinute / 1440)
    sumPrice = parkingDays * priceModel.price
  }

  return sumPrice
}

module.exports = {
  calculateParkingFee
}
