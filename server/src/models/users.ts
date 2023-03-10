module.exports = (sequelize: any, DataTypes: any) => {
  const users = sequelize.define("users", {
    id: {
      allowNull: false,
      // defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    uid: {
      allowNull: false,
      // defaultValue: DataTypes.UUIDV1,
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // Users.associate = (models: any) => {
  //   Users.hasMany(models.Likes, {
  //     onDelete: "cascade",
  //   });

  //   Users.hasMany(models.Posts, {
  //     onDelete: "cascade",
  //   });
  // };

  return users;
};
