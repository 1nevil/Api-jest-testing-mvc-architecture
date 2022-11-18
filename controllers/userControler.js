const userModel = require("../schema/userModel");

const readUser = async (req, res) => {
  try {
    const user = await userModel.find({});
    res.json(user);
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const newUser = new userModel({
    name,
    email,
  });
  try {
    const createdUser = await newUser.save();
    res.status(201).send(createdUser);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "user Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: err.massage });
  }
};

const updateUser = async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.email != null) {
    res.user.email = req.body.email;
  }
  try {
    const updatedUser = await res.user.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const getOneUser = async (req, res) => {
  res.send(res.user.name);
};

async function getUser(req, res, next) {
  let user;
  try {
    user = await userModel.findById(req.params.id);
    console.log(user);
    if (user == null) {
      res.status(404).json({ message: "user is not Found" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
  res.user = user;
  next();
}
module.exports = {
  readUser,
  createUser,
  deleteUser,
  updateUser,
  getOneUser,
  getUser,
};
