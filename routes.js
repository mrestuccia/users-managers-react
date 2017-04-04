const router = require('express').Router();
const db = require('./db');

const User = db.models.User;

// GET /api/users
router.get('/users', (req, res, next) => {
  User.findAll({ include: [{ model: User, as: 'manager' }] })
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
  const managerId = req.body.managerId;

  console.log('put', id, managerId);
  res.status(200).send();
});

module.exports = router;
