const app = require("express")();
const path = require("path");

const cors = require("cors");

const shortid = require("shortid");
const Razorpay = require("razorpay");
const port = "3001";
const razorpay = new Razorpay({
  key_id: "rzp_test_VjTvES0gFi3uVE",
  key_secret: "U25XvlQLl2lF6RC3LwZmIczI",
});
app.use(cors());
app.get("/logo.png", (req, res) => {
    res.sendFile(path.join(__dirname, "logo.png"));
  });
  app.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = 1;
    const currency = "INR";
  
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
  
    try {
      const response = await razorpay.orders.create(options);
      console.log(response);
      res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.log(error);
    }
  });
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });