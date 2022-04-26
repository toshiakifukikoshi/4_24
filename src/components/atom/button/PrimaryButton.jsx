import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;

  return (
    <>
      <SButton>{children}</SButton>
    </>
  );
};

const SButton = styled(BaseButton)`
  color: #fff;
  margin: 30px;
`;
