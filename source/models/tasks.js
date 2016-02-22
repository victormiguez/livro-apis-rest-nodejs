module.exports = () => {
  return {
    findAll: (params, callback) => {
      return callback([
        {title: 'Fazer compras'},
        {title: 'Limpar o pc'}
      ]);
    }
  };
};
