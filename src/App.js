import "./styles.css";
import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchIput";
import { UserCard } from "./components/organisms/user/UserCard";

export default function App() {
  const user = {
    name: "吹越俊明",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "111222334@aaa.com",
    phone: "090-4914-2017",
    company: {
      name: "株式会社アストリア"
    },
    website: " http://google.com"
  };

  return (
    <div className="App">
      <PrimaryButton>これはボタンです</PrimaryButton>
      <br />
      <SecondaryButton>こちらもボタンです</SecondaryButton>
      <br />
      <SearchInput placeholder="検索を入力" />
      <UserCard user={user} />
    </div>
  );
}
