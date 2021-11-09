import translate from "../../translate/translations";
import cn from "./BtnTabs.module.css";
import cl from "classnames";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCurrentRegion,
  changeSearchQuery,
  changeSortParams,
  toolkitState,
} from "../../toolkit/tollkitSlice";

export default function BtnTabs() {
  const state = useSelector(toolkitState);
  const { currentRegion, lang, covid } = state;
  const regions = Object.keys(covid);
  const dispatch = useDispatch();
  function changeRegion(region) {
    dispatch(changeCurrentRegion(region));
    dispatch(changeSearchQuery(""));
    dispatch(changeSortParams({ key: "confirmed", order: -1 }));
  }
  return (
    <div className={cn.wrapper}>
      {regions.map((region) => (
        <button
          key={region}
          className={cl(cn.tabs, { [cn.active]: region === currentRegion })}
          onClick={() => changeRegion(region)}
        >
          {translate[lang][region]}
        </button>
      ))}
    </div>
  );
}

// export default function Lang() {
//   const [{ covid, lang, currentRegion }, dispatch] = useData();
//   const regions = Object.keys(covid)

//   function changeRegion(selectedRegion) {
//     dispatch({ type: "CHANGE_REGION", payload: selectedRegion });
//     dispatch({ type: "SEARCH", payload: "" });
//     dispatch({
//       type: "SORT",
//       payload: { key: 'confirmed', order: -1 },
//     });
//   }
//   return (
//     <div className={cn.wrapper}>
//       {regions.map((region) => (
//         <button
//           key={region}
//           className={cl(cn.tabs, {[cn.active]: region === currentRegion})}
//           onClick={() => changeRegion(region)}
//         >
//           {translate[lang][region]}
//         </button>
//       ))}
//     </div>
//   );
// }
