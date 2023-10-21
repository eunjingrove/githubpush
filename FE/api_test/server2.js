const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");

const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true })); // cors 허용
app.use(express.json());

// const client_id =
// const client_secret =
const api_url =
  "https://openapi.naver.com/v1/search/book_adv.json?d_isbn=9791168341418";
// "https://openapi.naver.com/v1/search/blog?query=" +
// encodeURI(req.query.query); // JSON 결과

app.get("/search/book", async (req, res) => {
  try {
    const response = await axios.get(api_url, {
      headers: {
        // "X-Naver-Client-Id": client_id,
        // "X-Naver-Client-Secret": client_secret,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "알 수 없는 오류가 발생했습니다." });
  }
});

app.listen(3020, () => {
  console.log("Listening to port 3020...");
});
