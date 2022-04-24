import "./styles.css";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>これはボタンです</PrimaryButton>
      <br />
      <PrimaryButton>こちらもボタンです</PrimaryButton>
    </div>
  );
}
