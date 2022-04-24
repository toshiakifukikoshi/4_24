import styled from "styled-components";

export const SecondaryButton = (props) => {
  const { children } = props;

  return (
    <>
      <button>{children}</button>
    </>
  );
};
