const mongoose = require('mongoose')

const Market = mongoose.model('Market', {
    name: String,
    cnpj: String,
    location: Object,
    products: String,
    thumbnail: String,
})

export default Market;