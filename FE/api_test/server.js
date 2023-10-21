const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true })); // cors 허용
app.use(express.json());

const TTBKey = "";
// const ISBN = "1185014470";

app.get("/search/book", async (req, res) => {
  const { searchQuery } = req.query;
  const url = `http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${TTBKey}&Query=${encodeURIComponent(
    searchQuery
  )}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`;

  try {
    const response = await axios.get(url);
    res.status(200).send(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/search/book/detail/:id", async (req, res) => {
  const { id } = req.params;
  const url = `http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=${TTBKey}&itemIdType=ISBN&ItemId=${id}&output=js&Version=20131101&OptResult=ebookList,usedList,reviewList`;

  try {
    const response = await axios.get(url);
    res.status(200).send(response.data);
    console.log(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3020, () => {
  console.log("Listening to port 3020...");
});
