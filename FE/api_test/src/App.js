import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [bookInfoDetail, setBookInfoDetail] = useState([]);
  // console.log(bookInfoDetail[0].title);

  const serverURL = "http://localhost:3020";

  const searchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchBookSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const getResults = async () => {
      try {
        const res = await axios.get(
          `${serverURL}/search/book?searchQuery=${searchQuery}`
        );
        console.log(res.data.item);
        const item = res.data.item;
        setSearchList(item);
      } catch (err) {
        console.log(err);
      }
    };

    getResults();
  }, [searchQuery]);

  const getBookDetails = async (isbn13) => {
    try {
      const res = await axios.get(`${serverURL}/search/book/detail/${isbn13}`);
      console.log(res.data.item);
      setBookInfoDetail(res.data.item); // Updated to an array
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={searchBookSubmit}>
        <input type="text" value={searchQuery} onChange={searchInput} />
        <ul>
          {searchList &&
            searchList.map((item) => (
              <li key={item.itemId}>
                <button onClick={() => getBookDetails(item.isbn13)}>
                  <span>{item.title}</span>
                  <span>{item.author}</span>
                  <img src={item.cover} alt="책 표지 이미지" />
                </button>
              </li>
            ))}
        </ul>
      </form>
      <article>
        {bookInfoDetail[0] && (
          <div>
            <img src={bookInfoDetail[0].cover} alt="책 표지 이미지" />
            <h2>{bookInfoDetail[0].title}</h2>
            <span>Author: {bookInfoDetail[0].author}</span>
            <p>Description: {bookInfoDetail[0].description}</p>
          </div>
        )}
      </article>
    </>
  );
}

export default App;
