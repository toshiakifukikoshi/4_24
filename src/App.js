import "./styles.css";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>これはボタンです</PrimaryButton>
      <br />
      <SecondaryButton>こちらもボタンです</SecondaryButton>
    </div>
  );
}
