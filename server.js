const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());

var data = [];

function isMobileNumber(phone) {
  var mob = /^[1-9]{1}[0-9]{9}$/;

  if (mob.test(phone) == false) {
    // alert("Please enter valid mobile number.");
    // txtMobile.focus();
    console.log("error in no");
    // window.alert("error in no");

    return false;
  }
}

app.post("/", async (req, res) => {
  const { username, date, phone, email } = await req.body;
  const ans = await isMobileNumber(phone);
  if (ans == false) {
    res.status(500);
    res.json({
      message: "Error in phone number",
    });
    return;
  }
  res.json({
    message: "success",
  });

  data = [...data, req.body];
  console.log(data);
  // res.send(req.body);
});
app.get("/", async (req, res) => {
  res.json({ message: "success" });
});

app.get("/user-list", async (req, res) => {
  await res.send(data);
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
