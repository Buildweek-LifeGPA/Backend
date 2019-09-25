// Libraries
const moment = require("moment");
const router = require("express").Router();

// Files
const Habits = require("../models/habit-model");
const middleware = require('../middleware/middleware')
// const restrictedMiddleware <-- To come

// Get All Habits
router.get("/", (req, res) => {
  Habits.find()
    .then(habits => {
      res.json(habits);
    })
    .catch(err => res.send(err));
});

// Add Habit
router.post("/", middleware.validateHabit, (req, res) => {
  const habitInfo = req.body;
  Habits.add(habitInfo)
    .then(habit => {
      res.status(201).json(habit);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "The habit could not be saved." });
    });
});

// Delete Habit
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Habits.remove(id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(error => {
      res.status(500).json({ error: "The habit could not be deleted." });
    });
});

module.exports = router;
