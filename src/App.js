import { useState } from "react";
import "./App.css";
import Loader from "./Component/Loader/Loader"
import Container from "./Component/Container";
import Navigation from "./Component/Navigation";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    let response = await fetch("https://reqres.in/api/users?page=1");
    const json_response = await response.json();
    setUsers(json_response.data);
    setLoading(false);
  };
  
  return (
    <>
      <Navigation  toggle={getUsers} />
      {!loading && <Container user={users} /> }
      {loading && <Loader /> }
    </>
  );
}

export default App;
