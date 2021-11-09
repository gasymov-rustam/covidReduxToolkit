import "./App.css";
import "./resets.css";
import Header from "./Components/Header/Header";
import CardList from "./Components/CardList/CardList";
import Lang from "./Components/Lang/Lang";
import BtnTabs from "./Components/BtnTabs/BtnTabs";
import GeneralInfo from "./Components/GeneralInfo/GeneralInfo";
import Search from "./Components/Search/Search";
import TableHead from "./Components/TableHead/TableHead";
import { useSelector } from "react-redux";
import { toolkitState } from "./toolkit/tollkitSlice";
import Load from "./Components/Load/Load";

function App() {
  const status = useSelector(toolkitState).status;
  const error = useSelector(toolkitState).error;

  return (
    <>
      {status === "loading" && <Load />}
      <div className="container">
        <Lang />
        <Header title="CORONA" />
        <BtnTabs />
        <GeneralInfo />
        <Search />  
        <table>
          <thead>
            <TableHead />
          </thead>
          <CardList />
        </table>
        {error && <h2 className="error-status">{error}</h2>}
      </div>
    </>
  );
}

export default App;
