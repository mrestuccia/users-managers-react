const router = require('express').Router();
const db = require('./db');

const User = db.models.User;

// GET /api/users
router.get('/users', (req, res, next) => {
  User.findAll({ 
    include: [{ model: User, as: 'manager' }], 
    order: [['id', 'ASC']]
  })
    .then((users) => {
      res.send(users);
    });
});

// GET /api/managers
router.get('/managers', (req, res, next) => {
  User.findAll({ where: { isManager: true } })
    .then((managers) => {
      res.send(managers);
    });
});

// PUT /api/users/:id
router.put('/users/:id', (req, res, next) => {
  const id = req.params.id;
  const managerId = req.body.managerId || null;

  User.findById(id)
    .then(user => {
      user.managerId = managerId;
      return user.save();
    })
    .then(() => {
      res.status(200).send({ id: id });
    });
});

module.exports = router;
