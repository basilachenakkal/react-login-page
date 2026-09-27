import { useState } from "react";
import "./App.css";

function Multiplication() {
  const [number, setNumber] = useState("");
  const [table, setTable] = useState([]);

  function handleClick() {
    let result = [];

    for (let i = 1; i <= 10; i++) {
      result.push(number * i);
    }

    setTable(result);
  }

  return (
    <div>
      <h2>Multiplication Table</h2>

      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />

      <button onClick={handleClick}>Show Table</button>

      {table.map((value, index) => (
        <p key={index}>
          {number} × {index + 1} = {value}
        </p>
      ))}
    </div>
  );
}

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    alert("Email: " + email + "\nPassword: " + password);
  }

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>Welcome Back</h1>
        <p>Login to your account</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

        </form>

        <p className="signup">
          Don't have an account? <a href="#">Sign Up</a>
        </p>

        <hr />

        <Multiplication />

      </div>
    </div>
  );
}

export default App;