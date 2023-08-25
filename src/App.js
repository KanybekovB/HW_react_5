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
    <>
      <div className="wrapper">
        <form action="">
          <div className="input-box">
            <label>
              <input
                type="text"
                placeholder="Username"
                value={person.name}
                onChange={(e) => handleChange(e, "name")}
                required
              />
              {person.name && <p>Name: {person.name}</p>}
            </label>
          </div>
          <div className="input-box">
            <label>
              <input
                type="text"
                placeholder="Password"
                required
                value={person.surname}
                onChange={(e) => handleChange(e, "surname")}
              />
              <p>
                {person.surname}
                {""}
              </p>
            </label>
          </div>
          <div className="input-box">
            <label>
              <input
                type="email"
                placeholder="Password"
                required
                value={person.email}
                onChange={(e) => handleChange(e, "email")}
              />
              <p>{person.email}</p>
            </label>
          </div>
          <div className="input-box">
            <label>
              <input
                type="text"
                placeholder="Password"
                required
                value={person.favoritePet}
                onChange={(e) => handleChange(e, "favoritePet")}
              />
              <p>
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
    </>
  );
}
