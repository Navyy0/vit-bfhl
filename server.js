const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// user details (hardcoded Indian-style values)
const USER_FULLNAME = "arjun_sharma";
const USER_DOB = "15082001";   // 15th Aug 2001
const USER_EMAIL = "arjun.sharma@vitstudent.ac.in";
const USER_ROLL = "21BCE1234";

// helper functions
const onlyDigits = (val) => /^[0-9]+$/.test(val);
const onlyLetters = (val) => /^[A-Za-z]+$/.test(val);

// main data processor
function segregateInput(items) {
  const odds = [];
  const evens = [];
  const lettersOnly = [];
  const specials = [];
  const collectedChars = [];
  let total = 0;

  for (let raw of items) {
    const str = String(raw);

    // capture alphabetic chars for concat string
    for (let ch of str) {
      if (/[A-Za-z]/.test(ch)) collectedChars.push(ch);
    }

    if (onlyDigits(str)) {
      const num = parseInt(str, 10);
      if (num % 2 === 0) evens.push(str);
      else odds.push(str);
      total += num;
    } else if (onlyLetters(str)) {
      lettersOnly.push(str.toUpperCase());
    } else {
      specials.push(str);
    }
  }

  // reverse chars and alternate case
  const reversed = collectedChars.reverse();
  let upperCaseNext = true;
  const concatStr = reversed
    .map((c) => {
      const out = upperCaseNext ? c.toUpperCase() : c.toLowerCase();
      upperCaseNext = !upperCaseNext;
      return out;
    })
    .join("");

  return {
    odd_numbers: odds,
    even_numbers: evens,
    alphabets: lettersOnly,
    special_characters: specials,
    sum: String(total),
    concat_string: concatStr,
  };
}

// POST route
app.post("/bfhl", (req, res) => {
  const data = req.body && req.body.data;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      user_id: `${USER_FULLNAME}_${USER_DOB}`,
      email: USER_EMAIL,
      roll_number: USER_ROLL,
      error: "data must be an array",
    });
  }

  const result = segregateInput(data);

  res.status(200).json({
    is_success: true,
    user_id: `${USER_FULLNAME}_${USER_DOB}`,
    email: USER_EMAIL,
    roll_number: USER_ROLL,
    ...result,
  });
});

// simple GET route (for browser test)
app.get("/", (req, res) => {
  res.send("✅ VIT-BFHL API is running. Use POST /bfhl to test.");
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
