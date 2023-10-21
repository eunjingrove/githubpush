import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [bookInfoDetail, setBookInfoDetail] = useState([]);

  const serverURL = "http://localhost:3020";

  const getBookDetails = async () => {
    try {
      const res = await axios.get(`${serverURL}/search/book`);
      console.log(res.data);
      setBookInfoDetail(res.data.item);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBookDetails();
  }, []);

  return (
    <>
      <article>
        {bookInfoDetail.map((item) => (
          <>
            <img src={item.cover} alt="책 표지 이미지" />
            <h2>{item.title}</h2>
            <span>{item.author}</span>
            <p>{item.description}</p>
          </>
        ))}
      </article>
    </>
  );
}

export default Test;
