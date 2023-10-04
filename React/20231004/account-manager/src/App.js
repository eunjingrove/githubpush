import ExpenseInput from "./containers/ExpenseInput/ExpenseInput";
import List from "./components/List/List";
import ExpenseList from "./containers/ExpenseList/ExpenseList";
import IncomeInput from "./containers/IncomeInput/IncomeInput";
import ExpenseTotal from "./containers/ExpenseTotal/ExpenseTotal";

function App() {
  return (
    <article>
      <header>
        {/* 사용자의 한달 월급을 입력합니다.  */}
        수입 input
        <IncomeInput />
      </header>

      <main>
        {/* 사용자가 구입한 상품의 이름과 가격을 입력합니다. */}
        지출 input
        <ExpenseInput />
        <div>
          {/* 사용자가 그동안 구입한 상품의 목록이 랜더링됩니다. */}
          지출 기록
          <ExpenseList />
          <div>
            {/* 사용자가 구입한 상품의 지출액의 총합 */}
            지출 총합
            <ExpenseTotal />
          </div>
        </div>
      </main>
    </article>
  );
}
export default App;

/* 
* 스토어를 바꾸는 것은 리듀서 
* 리듀서를 실행하기 위해선
* 디스패치를 먼저 실행해야 하며 
* 디스패치에는 액션을 전달해야 한다. 
*/
