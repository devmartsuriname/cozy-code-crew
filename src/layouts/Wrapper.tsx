import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import store from "../redux/store";
import Navigation from "../navigation/Navigation";

const Wrapper: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Provider>
  );
};

export default Wrapper;