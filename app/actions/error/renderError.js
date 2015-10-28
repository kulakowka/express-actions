export default (err, req, res, next) => {
  console.error(' ');
  console.error(err);
  res.status(500).send(err.message);
};
