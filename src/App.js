import Container from "./Component/Container";
import Navigation from "./Component/Navigation";
import { SpinnerCircular } from 'spinners-react';
import { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    setTimeout(async () => {
      let response = await fetch("https://reqres.in/api/users?page=1");
      const json_response = await response.json();
      setUsers(json_response.data);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <Navigation logoName={"LetsGrowMore"} toggle={getUsers} />
      {!loading && <Container user={users} />}
      {loading && <div className="load"><SpinnerCircular /></div>}
    </>
  );
}

export default App;
