import logo from "../assets/logo.svg";
import styles from "./Header.module.css";

export function Header() {
  return(
    <header>
    <img src={logo} />
    </header>
  );
}