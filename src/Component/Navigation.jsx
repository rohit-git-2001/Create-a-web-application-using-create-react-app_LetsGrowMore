import React from 'react';

const Navigation = (props) => {
  return (
    <>
      <nav>
        <div><h1>LetsGrowMore</h1></div>
        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li><button id='user'  >Get Users</button></li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation;
