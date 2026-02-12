import { useState } from "react";
import axios from "axios";

export default function Verify() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/verify/${certId}`);
      setResult(res.data);
      setError("");
    } catch (err) {
      setResult(null);
      setError("Certificate not found!");
    }
  };

  return (
    <div className="verify-page">
      <input
        type="text"
        placeholder="Enter Certificate ID"
        value={certId}
        onChange={(e) => setCertId(e.target.value)}
      />
      <button onClick={handleVerify}>Search</button>

      {result && (
        <div className="result">
          <p><b>Name:</b> {result.name}</p>
          <p><b>Domain:</b> {result.domain}</p>
          <p><b>Certificate ID:</b> {result.certificateId}</p>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
}