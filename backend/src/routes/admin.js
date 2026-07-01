// const express = require("express");
// const prisma = require("../config/prisma");
// const { comparePassword, generateToken } = require("../utils/auth");
// const {
//   authMiddleware,
//   requireAdmin,
// } = require("../middleware/authMiddleware");

// const router = express.Router();

// // ---------------------------
// // ADMIN LOGIN (FIXED)
// // ---------------------------
// router.post("/auth/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const admin = await prisma.admin.findUnique({
//       where: { email },
//       include: { hostel: true },
//     });

//     if (!admin || !(await comparePassword(password, admin.password))) {
//       return res.status(401).json({ error: "Invalid credentials" });
//     }

//     // 🔥 FORCE role to ADMIN for frontend compatibility
//     const token = generateToken({
//       id: admin.id,
//       role: "ADMIN", // ← FIXED
//       hostelId: admin.hostelId, // ← NEEDED FOR FILTERING
//     });

//     res.json({
//       user: {
//         id: admin.id,
//         name: admin.name,
//         role: "ADMIN", // ← FIXED
//         hostelId: admin.hostelId,
//         hostelName: admin.hostel?.name,
//       },
//       token,
//     });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// // ================================
// // GET ADMIN PROFILE
// // ================================
// router.get("/profile", authMiddleware, requireAdmin, async (req, res) => {
//   try {
//     const admin = await prisma.admin.findUnique({
//       where: { id: req.user.id },
//       include: { hostel: true },
//     });

//     res.json({ admin });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// // ================================
// // UPDATE ADMIN PROFILE
// // ================================
// router.put("/profile", authMiddleware, requireAdmin, async (req, res) => {
//   try {
//     const { name, email, bio } = req.body;
    
//     const updatedAdmin = await prisma.admin.update({
//       where: { id: req.user.id },
//       data: {
//         ...(name && { name }),
//         ...(email && { email }),
//         ...(bio && { bio }),
//       },
//     });

//     res.json({ admin: updatedAdmin, message: "Profile updated successfully" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// module.exports = router;
const express = require("express");
const prisma = require("../config/prisma");
const { comparePassword, generateToken } = require("../utils/auth");
const {
  authMiddleware,
  requireAdmin,
} = require("../middleware/authMiddleware");

const router = express.Router();

// ================================
// ADMIN LOGIN
// ================================
router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await comparePassword(
      password,
      admin.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = generateToken({
      id: admin.id,
      role: "ADMIN",
    });

    res.json({
      user: {
        id: admin.id,
        name: admin.name,
        email: admin.email,
        role: "ADMIN",
      },
      token,
    });
  } catch (error) {
    console.error("Admin Login Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ================================
// GET ADMIN PROFILE
// ================================
router.get("/profile", authMiddleware, requireAdmin, async (req, res) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        id: req.user.id,
      },
    });

    if (!admin) {
      return res.status(404).json({ error: "Admin not found" });
    }

    res.json({
      admin,
    });
  } catch (error) {
    console.error("Get Profile Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ================================
// UPDATE ADMIN PROFILE
// ================================
router.put("/profile", authMiddleware, requireAdmin, async (req, res) => {
  try {
    const { name, email } = req.body;

    const updatedAdmin = await prisma.admin.update({
      where: {
        id: req.user.id,
      },
      data: {
        ...(name && { name }),
        ...(email && { email }),
      },
    });

    res.json({
      admin: updatedAdmin,
      message: "Profile updated successfully",
    });
  } catch (error) {
    console.error("Update Profile Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;