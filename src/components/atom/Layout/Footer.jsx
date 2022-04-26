import styled from "styled-components";

export const Footer = () => {
  return (
    <>
      <SFooter>&copy; 2021 toshiakiTest Inc.</SFooter>
    </>
  );
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px;
  position: fixed;
  bottom: 0px;
  width: 100%;
`;
