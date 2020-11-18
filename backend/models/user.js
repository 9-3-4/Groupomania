const con = require('./../config/db.js');

// construction base de donnée
const User = function (user) {
  console.log(user);
  this.nom = user.nom;
  this.email = user.email;
  this.motdepasse = user.password;
};

//Création d'un user
User.create = (newCustomer, result) => {
  con.query('INSERT INTO t_user SET ?', newCustomer, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }

    console.log('created customer: ', { id: res.insertId, ...newCustomer });
    result(null, { id: res.insertId, ...newCustomer });
  });
};

//login d'un user
User.findByEmail = (email, result) => {
  con.query('SELECT * FROM t_user WHERE email=?', email, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    result(null, res);
  });
};

//recupere tout les utilisateurs
User.getAll = (result) => {
  con.query('SELECT * FROM t_user', (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    console.log('Liste des utilisateurs: ', res);
    result(null, res);
  });
};

//supprime un utilisateur
User.remove = (id, result) => {
  con.query('DELETE FROM t_user WHERE id=?', id, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: 'not_found' }, null);
      return;
    }
    console.log('deleted customer with id: ', id);
    result(null, res);
  });
};

module.exports = User;
