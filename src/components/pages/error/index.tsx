import HeaderOne from "../../../layouts/headers/HeaderOne";
import FooterOne from "../../../layouts/footers/FooterOne";
import ErrorArea from "./ErrorArea";

const Error = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <ErrorArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Error;