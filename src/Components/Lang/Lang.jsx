import cn from "./Lang.module.css";
import translate from "../../translate/translations";
import cl from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { toolkitState, changeLang } from "../../toolkit/tollkitSlice";

export default function Lnag() {
  const lang = useSelector(toolkitState).lang;
  const dispatch = useDispatch()
  const languages = Object.keys(translate);
  return (
    <div className={cn.wrapper}>
      {languages.map((language) => (
        <button
          key={language}
          className={cl(cn.btn, { [cn.active]: lang === language })}
          onClick={() => dispatch(changeLang(language))}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
