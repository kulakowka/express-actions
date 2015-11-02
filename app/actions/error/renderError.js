export default (err, req, res, next) => {
  let error = req.app.get('env') === 'development' ? err : {}

  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: error
  })
}
