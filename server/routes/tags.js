const router = require("express").Router();
const Tag = require("../models/Tags");
const Post = require("../models/Post");

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

// Delete tag
router.delete("/:id", async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    try {
      await tag.delete();
      res.status(200).json("Tag has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
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
