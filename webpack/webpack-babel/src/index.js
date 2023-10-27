const userData = {
  address: {
    pref: '兵庫県'
  }
}

const city = userData.address.city?.town;
console.log(city);