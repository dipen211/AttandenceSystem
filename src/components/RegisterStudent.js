import React, { useState } from "react";
import { startRegistration } from "@simplewebauthn/browser";
import axios from "axios";

const RegisterStudent = () => {
  const [name, setName] = useState("");

  const handleRegister = async () => {
    try {
      const registerOptions = await axios.get("https://attandencesystembackend.onrender.com/api/webauthn/register-options");
      const registerResp = await startRegistration(registerOptions.data);
      await axios.post("https://attandencesystembackend.onrender.com/api/students/register", { name, credential: registerResp });
      alert(`${name} registered successfully!`);
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Failed to register fingerprint!");
    }
  };

  return (
    <div>
      <h2>Register Student</h2>
      <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleRegister}>Register with Fingerprint</button>
    </div>
  );
};

export default RegisterStudent;
