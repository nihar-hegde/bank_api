import { Request, Response } from "express";
import pool from "../db/db";

export const getBanks = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const bankData = await client.query(`SELECT * FROM banks;`);
    const data = bankData.rows;
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const getBankBranches = async (req: Request, res: Response) => {
  try {
    const bankName = req.query.bankName;
    if (!bankName || typeof bankName !== "string") {
      return res.status(400).json({ error: "Invalid bank name" });
    }
    const bankNameUpper = bankName.toUpperCase();
    const client = await pool.connect();
    const bankBranchData = await client.query(
      `SELECT * FROM bank_branches where bank_name = $1;`,
      [bankNameUpper],
    );
    const data = bankBranchData.rows;
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const getBankBranchesByBankId = async (req: Request, res: Response) => {
  try {
    const bankId = parseInt(req.params.bankId);
    const client = await pool.connect();
    const bankBranchData = await client.query(
      `SELECT * FROM branches where bank_id = ${bankId};`,
    );
    const data = bankBranchData.rows;
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const getBrachDetailsByIFSC = async (req: Request, res: Response) => {
  try {
    const ifsc = req.params.ifsc;
    if (!ifsc || typeof ifsc !== "string") {
      return res.status(400).json({ error: "Invalid IFSC" });
    }
    const client = await pool.connect();
    const branchData = await client.query(
      `SELECT * FROM branches where ifsc = $1;`,
      [ifsc],
    );
    const data = branchData.rows;
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

export const getBankBranchesByBankIdandIFSC = async (
  req: Request,
  res: Response,
) => {
  try {
    const ifsc = req.params.ifsc;
    const bankId = req.query.bankId;
    if (!ifsc || typeof ifsc !== "string") {
      return res.status(400).json({ error: "Invalid IFSC" });
    }
    if (!bankId || typeof bankId !== "string") {
      return res.status(400).json({ error: "Invalid bankId" });
    }
    const client = await pool.connect();
    const branchData = await client.query(
      `SELECT * FROM bank_branches WHERE  bank_id = $1 and ifsc = $2`,
      [parseInt(bankId), ifsc],
    );

    const data = branchData.rows;
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};
