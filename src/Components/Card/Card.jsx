import cn from "./Card.module.css";
import { createArrow } from "../../utilits/utilits";
import { useSelector } from "react-redux";
import { toolkitState } from "../../toolkit/tollkitSlice";
export default function Card({ data }) {
  const lang = useSelector(toolkitState).lang;
  return (
    <tr className={cn.wrapperData}>
      <td className={cn.wrapperDataCountry}>{data.label[lang]}</td>
      <td className={cn.wrapperDataConfirmed}>
        <div>{data.confirmed}</div>
        <div className={cn.wrapperDataDelta}>{createArrow(data["delta_confirmed"])}</div>
      </td>
      <td className={cn.wrapperDataDeaths}>
        <div>{data.deaths}</div>
        <div className={cn.wrapperDataDelta}>{createArrow(data["delta_deaths"])}</div>
      </td>
      <td className={cn.wrapperDataRecovered}>
        <div>{data.recovered}</div>
        <div className={cn.wrapperDataDelta}>{createArrow(data["delta_recovered"])}</div>
      </td>
      <td className={cn.wrapperDataExisting}>
        <div>{data.existing}</div>
        <div className={cn.wrapperDataDelta}>{createArrow(data["delta_existing"])}</div>
      </td>
    </tr>
  );
}
