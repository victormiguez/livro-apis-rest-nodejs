module.exports = app => {
  const PORT = app.get('port');
  app.listen(PORT, () => console.log(`NTask API - porta ${PORT}`));
};
