# Bank APP API

Note: the deployed version might take upto 50 seconds for the first time as the free version of Render will auto shut off after certain time of inactivity.

## Installation

1. Clone the repository
2. Create a `.env` file in the root directory with content from .env.example
3. Install the dependencies with `npm install`
4. use `npm start` to start the server
5. the server should run on port 8080

## Endpoints

### GET http://localhost:8080/api/v1/banks

Returns all the banks

#### Request

#### sample response

```json
{
  "data": [
    {
      "name": "STATE BANK OF INDIA",
      "id": "1"
    },
    {
      "name": "PUNJAB NATIONAL BANK",
      "id": "2"
    }
  ]
}
```

### GET http://localhost:8080/api/v1/bank-branches?bankName=bankname

Returns all the branches of the bank name

#### Sample Response:

```json
{
  "data": [
    {
      "ifsc": "PUNB0309100",
      "bank_id": "2",
      "branch": "NEW DELHI JANPATH N-86 (MERGED",
      "address": "DISTT. NEW DELHI (DELHI)",
      "city": "DELHI",
      "district": "DELHI",
      "state": "DELHI",
      "bank_name": "PUNJAB NATIONAL BANK"
    },
    {
      "ifsc": "PUNB0309200",
      "bank_id": "2",
      "branch": "L BLOCK CON CIRCUS ",
      "address": "4, L-BLOCK, CONNAUGHT PLACE",
      "city": "NEW DELHI",
      "district": "NEW DELHI",
      "state": "DELHI",
      "bank_name": "PUNJAB NATIONAL BANK"
    }
  ]
}
```

### GET http://localhost:8080/api/v1/branch-details/ifsc

Returns the bank branch details by the ifsc code.

#### Sample Response:

```json
{
  "data": [
    {
      "ifsc": "SMBC0000001",
      "bank_id": "170",
      "branch": "RTGS-HO",
      "address": "13TH FLOOR, HINDUSTAN TIMES HOUSE, 18-20, KG MARG,NEW DELHI - 110001",
      "city": "NEW DELHI",
      "district": "NEW DELHI",
      "state": "DELHI"
    }
  ]
}
```

### GET http://localhost:8080/api/v1/branch-detailsbybankId/SMBC0000001?bankId=170

Return the bank branch details by the bankid and the ifsc code.

#### Sample Response:

```json
{
  "data": [
    {
      "ifsc": "SMBC0000001",
      "bank_id": "170",
      "branch": "RTGS-HO",
      "address": "13TH FLOOR, HINDUSTAN TIMES HOUSE, 18-20, KG MARG,NEW DELHI - 110001",
      "city": "NEW DELHI",
      "district": "NEW DELHI",
      "state": "DELHI",
      "bank_name": "SUMITOMO MITSUI BANKING CORPORATION"
    }
  ]
}
```

## Hosted on Render

### URL: https://bank-api-uohz.onrender.com

## Bank API

This API provides information about banks and their branches.

### Endpoints

| Endpoint                                                    | Description                                           |
| :---------------------------------------------------------- | :---------------------------------------------------- |
| `GET /api/v1/banks`                                         | Get a list of all banks                               |
| `GET /api/v1/bank-branches?bankName={bankName}`             | Get all branches for a specific bank                  |
| `GET /api/v1/branch-details/{ifsc}`                         | Get details for a specific branch by IFSC code        |
| `GET /api/v1/branch-detailsbybankId/{ifsc}?bankId={bankId}` | Get details for a specific branch by IFSC and bank ID |
