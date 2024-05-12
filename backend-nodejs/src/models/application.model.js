const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/database/config.db");

const Application = sequelize.define(
  "Application",
  {
    business_application_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },
    sales_agent_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sales_agent_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sales_agent_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    account_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    application_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    business_category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "applications",    
  }
);

module.exports = Application;
