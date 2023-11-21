import React from "react";

const Header = ({ setShowForm, showForm }) => {
  return (
    <div className="header">
      <h1 className="mainHead">ToDos-List</h1>
      {!showForm && (
        <button
          className="addButton"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
};

export default Header;
