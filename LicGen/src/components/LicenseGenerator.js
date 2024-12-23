import React, { useState } from "react";
import { generateLicenseKey } from "./licenseUtils"; // Import the function
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LicenseGenerator = () => {
  const [input, setInput] = useState(""); // For system ID
  const [email, setEmail] = useState(""); // For email
  const [phone, setPhone] = useState(""); // For phone number
  const [licenseKey, setLicenseKey] = useState(""); // For generated license
  const [loading, setLoading] = useState(false); // To display loading state

  const identifier = process.env.REACT_APP_IDENTIFIER; // Environment variable

  // Validation helpers
  const isValidEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // Simple email regex
  const isValidPhone = (phone) =>
    /^[0-9]{11}$/.test(phone); // Must be exactly 11 digits

  // Focus on first invalid field
  const focusOnInvalidField = (field) => {
    if (field) {
      field.focus();
    }
  };

  const generateLicense = async () => {
    setLoading(true); // Start loading

    // Input validation individually
    if (!input) {
      toast.error("System ID is required.");
      focusOnInvalidField(document.getElementById("system-id"));
      setLoading(false);
      return;
    }

    if (!email) {
      toast.error("Email is required.");
      focusOnInvalidField(document.getElementById("email"));
      setLoading(false);
      return;
    }

    if (!phone) {
      toast.error("Phone number is required.");
      focusOnInvalidField(document.getElementById("phone"));
      setLoading(false);
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Invalid email address.");
      focusOnInvalidField(document.getElementById("email"));
      setLoading(false);
      return;
    }

    if (!isValidPhone(phone)) {
      toast.error("Phone number must be exactly 11 digits.");
      focusOnInvalidField(document.getElementById("phone"));
      setLoading(false);
      return;
    }

    if (!identifier) {
      toast.error("Identifier is missing or invalid.");
      setLoading(false);
      return;
    }

    try {
      const generatedKey = await generateLicenseKey(input, identifier); // Generate the license key
      setLicenseKey(generatedKey.toUpperCase()); // Set key in uppercase
      toast.success("License key generated successfully!");
    } catch (error) {
      console.error("Error generating license:", error);
      toast.error("Failed to generate license key.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Disable right-click on the image
  const handleRightClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      {/* Logo */}
      <img
        src="https://www.dropbox.com/scl/fi/8f0bbi5enh8a8m5gi97o7/logo2.png?rlkey=p87ertb6ku1rfcxcntmm7krgu&dl=1"
        alt="Logo"
        style={{ width: "150px", marginBottom: "20px" }}
        onContextMenu={handleRightClick} // Prevent right-click
      />

      <h1>License Key Generator</h1>

      <div>
        <label>System ID:</label>
        <input
          id="system-id"
          type="text"
          placeholder="Enter System ID"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button onClick={generateLicense} disabled={loading}>
        {loading ? "Generating..." : "Generate License Key"}
      </button>

      {licenseKey && (
        <div className="generated-key">
          <h2>Generated License Key:</h2>
          <p>{licenseKey}</p>
        </div>
      )}

      {/* Toast notifications container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default LicenseGenerator;
