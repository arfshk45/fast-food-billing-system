const billsModel = require("../models/billsModel");

//add items
const addBillsController = async (req, res) => {
  try {
    const newBill = new billsModel(req.body);
    await newBill.save();
    res.send("Bill created Successfully!");
  } catch (error) {
    res.send("something went wrong");
    console.log(error);
  }
};
// get bills

const getBillsController = async (req, res) => {
  try {
    const bills = await billsModel.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addBillsController, getBillsController };
