import styled from "styled-components";
import { PrimaryButton } from "../atom/button/PrimaryButton";
import { Input } from "../atom/input/Input";

export const SearchInput = (props) => {
  console.log(props);
  const { placeholder } = props;
  console.log(placeholder);
  return (
    <SContainer>
      <SInput type="text" placeholder={placeholder} />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 999px;
  outline: none;
`;
const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
