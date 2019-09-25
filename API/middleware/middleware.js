
module.exports = {
  validateHabit: function(req, res, next) {
    const habitInfo = req.body;
    if (
      habitInfo === undefined ||
      habitInfo.habit_text === undefined ||
      habitInfo.user_id === undefined
    ) {
      return res
        .status(400)
        .json({
          errorMessage: "Please provide habit text & user id"
        });
    } else {
      next();
    }
  },

  validateUser: function(req, res, next) {
    const userInfo = req.body;
    if (
      userInfo === undefined ||
      userInfo.username === undefined ||
      userInfo.password === undefined
    ) {
      return res
        .status(400)
        .json({ errorMessage: "Please provide username and password." });
    } else {
      next();
    }
  }
};
