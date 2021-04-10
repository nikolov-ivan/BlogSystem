import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const GreetingMessage = (props) => {
  const { authInfo } = useContext(AuthContext);
  const { isAuthenticated } = authInfo;
  const { userInfo } = useContext(AuthContext);

  return <>Welcome, {isAuthenticated ? userInfo[0] : "Guest"} !</>;
};
export default GreetingMessage;
