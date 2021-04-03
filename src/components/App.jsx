import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handelOnChange(event) {
    const { value, name } = event.target;

    setContact((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  }

  function onFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={onFormSubmit}>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handelOnChange}
        />
        <input name="lName" placeholder="Last Name" onChange={handelOnChange} />
        <input name="email" placeholder="Email" onChange={handelOnChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
