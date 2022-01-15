module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("Survey", {
    SurveyID: {
      type: Sequelize.STRING
    },
    Status: {
      type: Sequelize.STRING
    },
    Responses: {
      type: Sequelize.INTEGER
    },
    SurveyJSON: {
      type: Sequelize.STRING
    }
  });

  return Tutorial;
};
