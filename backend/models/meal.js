module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define("meal", {
    mealId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    calories: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },

    servings: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  });

  return Meal;
};
