import React from "react";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management Dashboard</h1>
        <UserList />
      </header>
    </div>
  );
}

export default App;
