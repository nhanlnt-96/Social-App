const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UserMessage = require("../models/UserMessage");
const { createToken } = require("../JWT/jwt");

//sign up v.1.0
/* const signUpAccount = async (req, res) => {
  const _id = new mongoose.Types.ObjectId();
  const userCheck = await UserMessage.findOne({ username });
  const { fullName, password, email, avatarImageURL } = req.body;
  const emailCheck = await UserMessage.findOne({ email });
  const createdAt = new Date();

  try {
    if (emailCheck) {
      res.status(400).json({ error: "Email already exist. 🤔" });
      } else if (userCheck) {
        res.json({ error: "Username already exist. 🤔" });
      } else if (!userCheck && !emailCheck) {
    } else if (!emailCheck) {
      bcrypt.hash(password, 10).then(async (hash) => {
        await new UserMessage({
          _id,
          email,
          fullName,
          password: hash,
          avatarImageURL,
          createdAt,
        }).save();
        res.status(201).json("Registered 😍");
      });
    }
  } catch (error) {
    res.status(400).json({ error: { error } });
  }
}; */

//sign up v.2.0
const signUpAccount = async (req, res) => {
  const { _id, fullName, email, avatarImageURL } = req.body;
  const emailCheck = await UserMessage.findOne({ email });
  const createdAt = new Date();

  try {
    if (emailCheck) {
      res.status(400).json({ error: "Email already exist. 🤔" });
    } else if (!emailCheck) {
      await new UserMessage({
        _id,
        email,
        fullName,
        avatarImageURL,
        createdAt,
      }).save();
      res.status(201).json("Registered 😍");
    }
  } catch (error) {
    res.status(400).json({ error: { error } });
  }
};

//sign in
const signInAccount = async (req, res) => {
  const { username, password } = req.body;
  const userCheck = await UserMessage.findOne({ username });

  try {
    if (!userCheck) {
      res.json({ error: "Hmm, that username doesn't look right. 😳" });
    } else {
      bcrypt.compare(password, userCheck.password).then((match) => {
        if (!match) {
          res.json({ error: "Hmm, that password doesn't look right. 🤔" });
        } else {
          const accessToken = createToken(userCheck);
          res.json({ accessToken, username });
        }
      });
    }
  } catch (error) {
    res.json({ error: { error } });
  }
};

const getAuthUser = (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.json({ error: { error } });
  }
};

//user profile
const getUserProfile = async (req, res) => {
  const id = req.params.id;
  const profileUser = await UserMessage.findById(id).select("-password -email");
  try {
    res.json(profileUser);
  } catch (error) {
    res.json({ error: { error } });
  }
};

//change password
const changePassword = async (req, res) => {
  const { username, password, email } = req.body;
  const userCheck = await UserMessage.findOne({ username, email });

  try {
    if (!userCheck) {
      res.json({ error: "Email or Username is wrong 🤔" });
    } else {
      bcrypt.hash(password, 10).then(async (hash) => {
        await UserMessage.findOneAndUpdate(
          {
            username,
            email,
          },
          { $set: { password: hash } }
        );
        res.json("Password changed 😍");
      });
    }
  } catch (error) {
    res.json({ error: { error } });
  }
};

module.exports = {
  signUpAccount,
  signInAccount,
  getAuthUser,
  getUserProfile,
  changePassword,
};
