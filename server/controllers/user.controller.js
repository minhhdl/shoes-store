const bcrypt = require('bcrypt');
const { createToken } = require('./auth.controller');
const User = require('../models/user');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ username }).exec();
    if (!user) {
      return res.json({
        status: 404,
        message: 'User not found',
      })
    }
    const isMatchPass = await bcrypt.compare(password, user.password);
    if (isMatchPass) {
      user = user.toJSON();
      delete user.password;
      const access_token = await createToken({ user });
      return res.json({
        status: 200,
        user,
        access_token,
      })
    }
    return res.json({
      status: 400,
      message: 'Can not login',
    });
  } catch (e) {
    return res.json({
      status: 400,
      message: 'Can not login',
    })
  }
}

module.exports = {
  login,
}