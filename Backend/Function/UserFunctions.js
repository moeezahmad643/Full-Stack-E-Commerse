const User = require("../Schema/userSchema");

async function NewUser(name,email,password) {
  try {
    const User = await new User({
      username: name,
      userEmail: email,
      password: password,
    });
    return await User.save();
  } catch (err) {
    throw err;
  }
}

async function GetUser(email, password) {
  try {
    return await User.findOne({
      userEmail: email,
      password: password,
    });
  } catch (err) {
    throw err;
  }
}

async function SetUser(userId, NewUser) {
  try {
    const user = await User.findOne(userId);
    if (!user) {
      throw new Error("User not found");
    }
    Object.assign(user, newData);
    return await user.save();
  } catch (err) {
    throw err;
  }
}

module.exports = {
  NewUser,
  GetUser,
  SetUser,
};
