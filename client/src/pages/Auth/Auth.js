import React from "react";
import { useDispatch } from "react-redux";

const Auth = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchMessages());
  // }, []);
  return (
    <div>
      <h1>Auth</h1>
    </div>
  );
};

export default Auth;
