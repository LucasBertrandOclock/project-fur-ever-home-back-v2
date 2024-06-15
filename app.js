import "dotenv/config";
import express from "express";
import session from "express-session";
import cors from "cors";
import { rateLimit } from "express-rate-limit";

import { router as apiRouter } from "./app/routers/index.js";
import { bodySanitizer } from "./app/middlewares/bodySanitizer.middleware.js";

const version = process.env.API_VERSION || 9000;

const app = express();

// Application security
// DDOS :
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100000,
    standardHeaders: true,
    legacyHeaders: false,
  })
);

// CORS:
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
// Body parser:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Body Sanitizer:
app.use(bodySanitizer);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 },
  })
);

app.use(`/api/v${version}`, apiRouter);

export default app;
