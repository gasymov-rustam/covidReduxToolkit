import { useDispatch, useSelector } from "react-redux";
import { changeSearchQuery, toolkitState } from "../../toolkit/tollkitSlice";
import cl from "./Search.module.css";

export default function Search() {
  const searchQuery = useSelector(toolkitState).searchQuery;
  const dispatch = useDispatch();
  return (
    <div className={cl.wrapper}>
      <form className={cl.searchForm}>
        <button type="submit" className={cl.button} disabled>
          &#128269;
        </button>
        <input
          type="text"
          onChange={(e) => dispatch(changeSearchQuery(e.target.value))}
          className={cl.input}
          name="searchPlace"
          placeholder="search by region"
          value={searchQuery}
        />
      </form>
    </div>
  );
}
