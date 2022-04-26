import { Header } from "../atom/Layout/Header";
import { Footer } from "../atom/Layout/Footer";

export const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
};
