const express = require("express");
const router = express.Router();
const Disorder = require("../../models/Disorder");
const auth = require("../../middleware/auth");

// Add a disorder for the authenticated user
router.post("/add-disorder", auth, async (req, res) => {
  const { name, dateDiagnosed } = req.body;
  const userId = req.user.id;

  try {
    const newDisorder = new Disorder({
      user: userId,
      name,
      dateDiagnosed,
    });

    await newDisorder.save();
    res.json({ newDisorder });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Failed to add disorder. Please try again." });
  }
});

// Add intensity log to a disorder
router.post("/add-intensity-log", async (req, res) => {
  const { disorderId, intensity } = req.body;

  try {
    const disorder = await Disorder.findById(disorderId);

    if (!disorder) {
      return res.status(404).json({ error: "Disorder not found" });
    }

    const currentDate = new Date();

    disorder.intensityLogs.push({ date: currentDate, intensity });

    await disorder.save();

    res.status(200).json({ message: "Intensity log added successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while saving intensity log" });
  }
});

// Get disorders associated with the authenticated user
router.get("/get-disorders", auth, async (req, res) => {
  const userId = req.user.id;

  try {
    const disorders = await Disorder.find({ user: userId });

    res.status(200).json(disorders);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving disorders." });
  }
});

// Update a disorder
router.put("/update/:id", auth, async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const updatedDisorder = await Disorder.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    );

    if (!updatedDisorder) {
      return res.status(404).json({ error: "Disorder not found" });
    }

    res
      .status(200)
      .json({ message: "Disorder updated successfully", updatedDisorder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});

// Delete a disorder
router.delete("/delete/:id", auth, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedDisorder = await Disorder.findByIdAndDelete(id);

    if (!deletedDisorder) {
      return res.status(404).json({ error: "Disorder not found" });
    }

    res.status(200).json({ message: "Disorder deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the disorder" });
  }
});

module.exports = router;
