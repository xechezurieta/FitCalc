
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const dbConnect = require('./config/mongo')

const app = express()

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3001

/* app.use('/api/acogidas', require('./routes/acogidas'))
app.use('/api/auth', require('./routes/auth')) */

app.listen(port, () => {
  console.log('Tu app esta hola por http://localhost' + port)
})

app.use('/api/auth', require('./routes/users'))
app.use('/api/macronutrients', require('./routes/macronutrients'))
app.use('/api/measures', require('./routes/measures'))
app.use('/api/foods', require('./routes/foods'))
app.use('/api/user-day-meals', require('./routes/userDayMeals'))

dbConnect()
