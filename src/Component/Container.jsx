import React from "react";

const Container = (props) => {
  return (
    <>
      <div className="container">
        <h2>Users</h2>
        <div className="cards-grid">
          {props.user.map((user) => (
            <div key={user.id} className="cards">
              <div>
                <img src={user.avatar} alt="User" />
                <p>
                  Name : {user.first_name} {user.last_name}
                </p>
                <p>E mail : {user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Container;
