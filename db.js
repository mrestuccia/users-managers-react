const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL, { force: true });


const User = db.define('user', {
  name: db.Sequelize.STRING,
  isManager: {
    type: db.Sequelize.BOOLEAN,
    defaultValue: false
  }
});

User.belongsTo(User, { as: 'manager' });
User.hasMany(User, { as: 'employee', foreignKey: 'managerId' });

const sync = () => {
  return db.sync();
};


const seed = () => {
  return sync()
    .then(() => {
      return Promise.all([
        User.create({ name: 'Moe', isManager: true }),
        User.create({ name: 'Larry' }),
        User.create({ name: 'Curly', isManager: true }),
        User.create({ name: 'Shep' })
      ]);
    })
    .then(([moe, larry, curly, shep]) => {
      return Promise.all([
        larry.setManager(moe.id),
        moe.addEmployee(curly.id),
        shep.setManager(curly.id)
      ]);
    });
};



module.exports = {
  sync,
  seed,
  models:
  {
    User
  }
}