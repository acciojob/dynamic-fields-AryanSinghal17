
import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [users, setUsers] = useState([
    { name: "", age: "" }
  ]);

  function addFields() {
    setUsers([...users, { name: "", age: "" }]);
  }

  function removeFields(index) {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
  }

  function handleChange(index, event) {
    const updatedUsers = [...users];

    updatedUsers[index][event.target.name] = event.target.value;

    setUsers(updatedUsers);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(users);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {users.map((user, index) => (
          <div key={index}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={user.name}
              onChange={(event) => handleChange(index, event)}
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={user.age}
              onChange={(event) => handleChange(index, event)}
              required
            />

            <button
              type="button"
              onClick={() => removeFields(index)}
              disabled={users.length === 1}
            >
              Remove
            </button>

            <br />
          </div>
        ))}

        <button type="button" onClick={addFields}>
          Add More..
        </button>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
