const express = require("express");
const prisma = require("../config/prisma");
const {
  authMiddleware,
  requireStudent,
} = require("../middleware/authMiddleware");

const router = express.Router();

// ================================
// GET STUDENT'S OWN ALLOCATION
// ================================
router.get("/allocation", authMiddleware, requireStudent, async (req, res) => {
  try {
    const allocation = await prisma.allocation.findFirst({
      where: { studentId: req.user.id, active: true },
      include: {
        room: {
          include: { hostel: true },
        },
      },
    });

    res.json({ allocation });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ================================
// GET STUDENT PROFILE
// ================================
router.get("/profile", authMiddleware, requireStudent, async (req, res) => {
  try {
    const student = await prisma.student.findUnique({
      where: { id: req.user.id },
    });

    res.json({ student });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ================================
// UPDATE STUDENT PROFILE
// ================================
router.put("/profile", authMiddleware, requireStudent, async (req, res) => {
  try {
    const { name, email, bio } = req.body;
    
    const updatedStudent = await prisma.student.update({
      where: { id: req.user.id },
      data: {
        ...(name && { name }),
        ...(email && { email }),
        ...(bio && { bio }),
      },
    });

    res.json({ student: updatedStudent, message: "Profile updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
