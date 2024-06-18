import express from "express";
import bankRouters from "./bankRouters";

const router = express.Router();

router.use("/", bankRouters);

export default router;
