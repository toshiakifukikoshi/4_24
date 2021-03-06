import styled from "styled-components";
import { useContext } from "react";
import { SearchInput } from "../molecules/SearchIput";
import { useLocation } from "react-router-dom";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../../components/atom/button/SecondaryButton";
import { UserContext } from "../../components/providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `吹越俊明${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "111222334@aaa.com",
    phone: "090-4914-2017",
    company: {
      name: "株式会社アストリア"
    },
    website: " http://google.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const onClickSwitch = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };

  return (
    <>
      <SContainer>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        <br />
        <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>

        <SUserArea>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </SUserArea>
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
