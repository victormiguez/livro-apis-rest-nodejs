module.exports = app => {
  const Tasks = app.tasks;

  app.get('/tasks', (req, res) => {
    Tasks.findAll({}, (tasks) => {
      res.json({tasks: tasks});
    });
  });
};
