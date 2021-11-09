import cn from "./Header.module.css";

export default function Header({ title }) {
  return <h2 className={cn.title}>{title}</h2>;
}
