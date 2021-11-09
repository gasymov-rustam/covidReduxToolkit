import cn from "./TableHead.module.css";
import translate from "../../translate/translations";
import cl from "classnames";
import { createArrow } from "../../utilits/utilits";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeSortParams, toolkitState } from "../../toolkit/tollkitSlice";

export default function SortBtns() {
  const dispatch = useDispatch();
  const state = useSelector(toolkitState);
  const { sortParams, lang, currentRegion } = state;
  const tableHeadKeys = ["label", "confirmed", "deaths", "recovered", "existing"];
  function setSortParams(tableHeadKey) {
    let order = -1;
    if (tableHeadKey === "label" && tableHeadKey !== sortParams.key) order = 1;
    else if (tableHeadKey !== "label" && tableHeadKey !== sortParams.key) order = -1;
    else order = sortParams.order * -1;
    dispatch(changeSortParams({ key: tableHeadKey, order }));
  }
  return (
    <tr className={cn.wrapper}>
      {tableHeadKeys.map((tableHeadKey) => (
        <th
          key={tableHeadKey}
          className={cl(cn.sortBtn, { [cn.active]: sortParams.key === tableHeadKey })}
          onClick={() => setSortParams(tableHeadKey)}
        >
          {tableHeadKey === sortParams.key && createArrow(sortParams.order, true)}
          {tableHeadKey === "label"
            ? translate[lang].region[currentRegion]
            : translate[lang][tableHeadKey]}
        </th>
      ))}
    </tr>
  );
}
// export default function TableHead() {
//   const [{ sortParams, currentRegion, lang }, dispatch] = useData();
//   const tableHeadKeys = ['label', 'confirmed', 'deaths', 'recovered', 'existing'];
//   function setSortParams(tableHeadKey) {
//     let order = -1;
//     if (tableHeadKey === 'label' && sortParams.key !== tableHeadKey) {
//       order = 1;
//     } else if (tableHeadKey !== 'label' && sortParams.key !== tableHeadKey) {
//       order = -1;
//     } else {
//       order = sortParams.order * -1;
//     }
//     dispatch({
//       type: 'SORT',
//       payload: { key: tableHeadKey, order },
//     });
//   }
//   return (
//     <tr className={cn.wrapper}>
//       {tableHeadKeys.map((tableHeadKey) => {
//         return (
//           <th
//             key={tableHeadKey}
//             onClick={() => setSortParams(tableHeadKey)}
//             className={cl(cn.sortBtn, { [cn.active]: tableHeadKey === sortParams.key })}
//           >
//             {tableHeadKey === sortParams.key && createArrow(sortParams.order, true)}
//             {tableHeadKey === 'label' ? translate[lang].region[currentRegion] : translate[lang][tableHeadKey]}
//           </th>
//         );
//       })}
//     </tr>
//   );
// }
