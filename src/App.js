import React from "react";
import RegisterStudent from "./components/RegisterStudent";
import FingerprintAuth from "./components/FingerprintAuth";

function App() {
  return (
    <div>
      <h1>Attendance System</h1>
      <RegisterStudent />
      <FingerprintAuth />
    </div>
  );
}

export default App;
