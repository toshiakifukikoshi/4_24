import { Header } from "../atom/Layout/Header";

export const HeaderOnly = (props) => {
  const { children } = props;

  return (
    <>
      <Header />

      {children}
    </>
  );
};
