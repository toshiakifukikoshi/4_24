import styled from "styled-components";
export const Input = () => {
  return (
    <>
      <SInput
        type="text"
        placeholder="検索してください
    "
      ></SInput>
    </>
  );
};

const SInput = styled.input`
  color: red;
`;
