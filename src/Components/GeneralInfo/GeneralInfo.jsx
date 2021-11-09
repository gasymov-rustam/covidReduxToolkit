import cl from "./GeneralInfo.module.css";
import { createSum, createArrow } from "../../utilits/utilits";
import translate from "../../translate/translations";
import { useSelector } from "react-redux";
import { toolkitState } from "../../toolkit/tollkitSlice";

export default function GeneralInfo() {
  const state = useSelector(toolkitState);
  const { currentRegion, covid, lang } = state;
  const data = covid[currentRegion];
  return (
    <dl className={cl.generalInformation}>
      <div className={cl.confirmed}>
        <dt>{translate[lang].confirmed}</dt>
        <dd>{data && createSum(data, "confirmed")}</dd>
        <dd className={cl.differnce}>{data && createArrow(createSum(data, "delta_confirmed"))}</dd>
      </div>
      <div className={cl.deaths}>
        <dt>{translate[lang].deaths}</dt>
        <dd>{data && createSum(data, "deaths")}</dd>
        <dd className={cl.differnce}>{data && createArrow(createSum(data, "delta_deaths"))}</dd>
      </div>
      <div className={cl.recovered}>
        <dt>{translate[lang].recovered}</dt>
        <dd>{data && createSum(data, "recovered")}</dd>
        <dd className={cl.differnce}>{data && createArrow(createSum(data, "delta_recovered"))}</dd>
      </div>
      <div className={cl.existing}>
        <dt>{translate[lang].existing}</dt>
        <dd>{data && createSum(data, "existing")}</dd>
        <dd className={cl.differnce}>{data && createArrow(createSum(data, "delta_existing"))}</dd>
      </div>
      ;
    </dl>
  );
}
