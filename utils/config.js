require('dotenv').config()

const PORT = process.env.PORT

// Baza podataka
const password = process.env.ATLAS_PASS
const dbname = process.env.NODE_ENV === 'test'
? 'poruke-api-test'
: 'poruke-api'
const DB_URI = `mongodb+srv://oarwa-am:${password}@cluster0.46fij.mongodb.net/${dbname}?retryWrites=true&w=majority`

module.exports = {PORT, DB_URI}