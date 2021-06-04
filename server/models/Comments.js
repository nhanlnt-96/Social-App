module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('Comments', {
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    commentContent: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Comments;
}