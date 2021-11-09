import { useEffect } from "react";
import { sortBy } from "../../utilits/utilits";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovid, toolkitState } from "../../toolkit/tollkitSlice";

export default function CardList() {
  const state = useSelector(toolkitState);
  const { searchQuery, covid, lang, currentRegion, sortParams } = state;
  const { key, order} = sortParams
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovid());
  }, [dispatch]);
  const query = searchQuery
    .trim()
    .toLowerCase()
    .replaceAll(/[\s]{2,}/g, " ")
    .split(" ");
  let formattedArray = [];
  if (covid[currentRegion]) {
    formattedArray = covid[currentRegion].filter((region) => {
      return query.every((word) => {
        return region.label[lang].toLowerCase().includes(word);
      });
    });
  }
  return (
      <tbody>
        {formattedArray.sort(sortBy(key, order, lang)).map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </tbody>
  );
}
