const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");
const errorHandler = require("./middleware/errorHandler");

// Import routes
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const studentRoutes = require("./routes/student");
const complaintsRoutes = require("./routes/complaints");
const hostelsRoutes = require("./routes/hostels");
const roomsRoutes = require("./routes/rooms");
const allocationRoutes = require("./routes/allocation");

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://hostelallocationsystem-production-3e54.up.railway.app",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

// ✅ FIXED: Routes properly mounted
app.use("/api/auth", authRoutes); // Student auth
app.use("/api/admin", adminRoutes); // Admin auth & routes
app.use("/api/student", studentRoutes); // Student-specific routes
app.use("/api/complaints", complaintsRoutes); // Complaints (both student & admin)
app.use("/api/hostels", hostelsRoutes); // Hostels
app.use("/api/rooms", roomsRoutes); // Rooms
app.use("/api/allocation", allocationRoutes); // Allocations

// Swagger Documentation
try {
  const swaggerDocument = YAML.load(path.join(__dirname, "../swagger.yaml"));
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument, {
      customCss: ".swagger-ui .topbar { display: none }",
      customSiteTitle: "Hostel Management API",
      explorer: true,
    })
  );
  console.log("📚 Swagger UI available at /api-docs");
} catch (error) {
  console.error("❌ Failed to load Swagger documentation:", error.message);
  app.get("/api-docs", (req, res) => {
    res.json({
      error: "Swagger documentation not available",
      message: error.message,
    });
  });
}

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Error handling
app.use(errorHandler);

module.exports = app;
