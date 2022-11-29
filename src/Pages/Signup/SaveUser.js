import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const SaveUser = (name, email) => {
  const [loginUserEmail, setLoginUserEMail] = useState("");
  const [token] = useToken(loginUserEmail);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (token) {
    navigate(from, { replace: true });
  }
  useEffect(() => {
    const user = { name, email };
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data from saveUser", data);
        //return email;
        setLoginUserEMail(email);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [name, email]);
};

export default SaveUser;
