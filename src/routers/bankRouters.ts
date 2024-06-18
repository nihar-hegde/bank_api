import express from "express";
import {
  getBankBranches,
  getBankBranchesByBankIdandIFSC,
  getBanks,
  getBrachDetailsByIFSC,
} from "../controllers/bank.controller";

const bankRouters = express.Router();

bankRouters.get("/banks", getBanks);
bankRouters.get("/bank-branches", getBankBranches);
bankRouters.get("/branch-details/:ifsc", getBrachDetailsByIFSC);
bankRouters.get(
  "/branch-detailsbybankId/:ifsc",
  getBankBranchesByBankIdandIFSC,
);

export default bankRouters;
