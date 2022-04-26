import "./styles.css";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchIput";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>これはボタンです</PrimaryButton>
      <br />
      <SecondaryButton>こちらもボタンです</SecondaryButton>
      <br />
      <SearchInput />
    </div>
  );
}
