import React from "react";
import { startAuthentication } from "@simplewebauthn/browser";
import axios from "axios";

const FingerprintAuth = () => {
  const handleFingerprintAuth = async () => {
    try {
      const authOptions = await axios.get("https://attandencesystembackend.onrender.com/api/webauthn/auth-options");
      const authResp = await startAuthentication(authOptions.data);
      await axios.post("https://attandencesystembackend.onrender.com/api/attendance/mark", { credential: authResp });
      alert("Attendance marked successfully!");
    } catch (error) {
      console.error("Auth Error:", error);
      alert("Failed to authenticate!");
    }
  };

  return (
    <div>
      <h2>Mark Attendance</h2>
      <button onClick={handleFingerprintAuth}>Scan Fingerprint</button>
    </div>
  );
};

export default FingerprintAuth;
