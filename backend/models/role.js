module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("role", {
    roleId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.ENUM("normal", "admin"),
      allowNull: false,
    },
  });

  return Role;
};
