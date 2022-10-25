import React from "react";
import Styles from "./Button.module.scss";

type Props = {
  text: string;
  primary?: "primary" | "secondary";
};

export default function Button({ text, primary = "primary" }: Props) {
  return <button className={Styles[primary + "-button"]}>{text}</button>;
}
