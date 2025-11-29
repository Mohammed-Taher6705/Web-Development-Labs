const express = require("express");
const router = express.Router();
const Course = require("../models/Course");


router.post("/", async (req, res) => {
  const course = new Course(req.body);
  const saved = await course.save();
  res.status(201).json(saved);
});


router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});


router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) return res.status(404).json({ message: "Not found" });
  res.json(course);
});


router.put("/:id", async (req, res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!course) return res.status(404).json({ message: "Not found" });
  res.json(course);
});


router.delete("/:id", async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);
  if (!course) return res.status(404).json({ message: "Not found" });
  res.json({ message: "Deleted" });
});

module.exports = router;
