module.exports = app => {
  app.use((req, res, next) => {
    res.status(404).send({
      error: `${req.originalUrl} not found`,
    });
    next();
  });
};
