const handleHttpError = (res, message = 'ERROR_UNDEFINED', code = 500) => {
  res.status(code)
  res.send({ error: message })
}

module.exports = { handleHttpError }
