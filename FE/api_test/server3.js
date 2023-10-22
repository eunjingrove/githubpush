const express = require("express");
const axios = require("axios");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true })); // cors 허용
app.use(express.json());

const client_id = "";
const client_secret = "";

app.get("/search", async (req, res) => {
  try {
    const searchQuery = req.query.searchQuery;

    const url = `https://openapi.naver.com/v1/search/book?query=${encodeURIComponent(
      searchQuery
    )}`;

    const config = {
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    };

    const response = await axios.get(url, config);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// 책 상세 정보
app.get("/search/book/detail/:id", async (req, res) => {
  const { id } = req.params;
  const url = `https://openapi.naver.com/v1/search/book_adv.json?d_isbn=${id}`;

  try {
    const config = {
      headers: {
        "X-Naver-Client-Id": client_id,
        "X-Naver-Client-Secret": client_secret,
      },
    };

    const response = await axios.get(url, config);
    res.status(200).send(response.data);
    console.log(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3020, () => {
  console.log(`Listening to port 3020...`);
});
