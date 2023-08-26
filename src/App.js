import React, { useState } from "react";

export default function PrototypeForm() {
  const [person, setPerson] = useState({
    name: "Barbara",
    surname: "Hepworth",
    email: "bhepworth@react.com",
    favoritePet: "love cats",
  });
  const handleChange = (e, data) => {
    setPerson({
      ...person,
      [data]: e.target.value,
    });
  };
  return (
    <div style={{
      paddin: '100px',
      width: '100vw',
      height: '100vh',
    }}>
      <div className="wrapper" style={{
        width: '250px', 
        margin: '100px auto',
        padding: '10px',
        height: '340px',
        border: '1px solid black',
      }}>
        <form action="">
          <div className="input-box">
            <label>
              <input
                type="text"
                value={person.name}
                onChange={(e) => handleChange(e, "name")}
                required
              />
              <p>Name: {person.name}{''}</p>
            </label>
          </div>
          <div className="input-box">
            <label>
              <input
                type="text"
                required
                value={person.surname}
                onChange={(e) => handleChange(e, "surname")}
              />
              <p> Surname: 
                {person.surname}
                {""}
              </p>
            </label>
          </div>
          <div className="input-box">
            <label>
              <input
                type="email"
                required
                value={person.email}
                onChange={(e) => handleChange(e, "email")}
              />
              <p>Email: {person.email}</p>
            </label>
          </div>
          <div className="input-box">
            <label>
              <input
                type="text"
                required
                value={person.favoritePet}
                onChange={(e) => handleChange(e, "favoritePet")}
              />
              <p> Beloved pet:
                {person.favoritePet}
                {""}
              </p>
            </label>
          </div>
          <button type="submit" className="btn">
            Click
          </button>
        </form>
      </div>
    </div>
  );
}
