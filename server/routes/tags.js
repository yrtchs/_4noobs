const router = require("express").Router();
const Tag = require("../models/Tags");

// Create tag
router.post("/", async (req, res) => {
  const newTag = new Tag(req.body);
  try {
    const savedTag = await newTag.save();
    res.status(200).json(savedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all tags
router.get("/", async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
