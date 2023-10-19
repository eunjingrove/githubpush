import { useState } from "react";
import JoinPage from "./Components/JoinPage";
import LoginPage from "./Components/LoginPage";
import Signup from "./Components/Signup";

function App() {
  const [accountname, setAccountName] = useState("");
  const [page, setPage] = useState(true);
  const handlePage = () => {
    setPage((prevPage) => {
      return !prevPage;
    });
  };

  const getMyinfo = async () => {
    // 토큰 가져오기
    const token = localStorage.getItem("token");
    console.log(token);
    const reqUrl = "https://api.mandarin.weniv.co.kr/user/myinfo";

    const res = await fetch(reqUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const json = await res.json();
    console.log(json);
    setAccountName(json.user.accountname);
  };

  return (
    <div>
      <button type="button" onClick={getMyinfo}>
        내 정보 불러오기
      </button>
      <ul>
        <li>{accountname}</li>
      </ul>
      {page ? (
        <LoginPage handlePage={handlePage} />
      ) : (
        <Signup handlePage={handlePage} />
      )}
    </div>
  );
}
export default App;
