import styled from "styled-components";

export const PrimaryButton = (props) => {
  const { children } = props;

  return (
    <>
      <SButton>{children}</SButton>
    </>
  );
};

const SButton = styled.button`
  background-color: #40514e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 99px;
  transition: all 0.8s;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
    transform: translateY(-5px) scale(1.1);
  }
`;
