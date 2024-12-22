// import React, { useState } from "react";
// import { generateLicenseKey } from "./licenseUtils"; // Import the function

// const LicenseGenerator = () => {
//   const [input, setInput] = useState(""); // For user input
//   const [licenseKey, setLicenseKey] = useState(""); // For generated license
//   const [loading, setLoading] = useState(false); // To display loading state
//   const [error, setError] = useState(""); // To display any error message

//   // Retrieve the static identifier from the environment variable
//   const identifier = process.env.REACT_APP_IDENTIFIER;

//   // Function to call generateLicenseKey and generate the license key
//   const generateLicense = async () => {
//     setError(""); // Reset error state
//     setLoading(true); // Start loading

//     // Check if identifier is valid
//     if (!identifier) {
//       setError("Identifier is missing or invalid.");
//       setLoading(false);
//       return;
//     }

//     try {
//       // Artificial delay
//       await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay

//       const generatedKey = await generateLicenseKey(input, identifier); // Call generateLicenseKey
//       setLicenseKey(generatedKey.toUpperCase()); // Convert to uppercase and set the generated key
//     } catch (error) {
//       console.error("Error generating license:", error);
//       setError(error.message); // Set the error message
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   return (
//     <div>
//       <h1>License Key Generator</h1>
//       <input
//         type="text"
//         placeholder="Enter System ID"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <br />
//       <button onClick={generateLicense} disabled={loading}>
//         {loading ? "Generating..." : "Generate License Key"}
//       </button>
//       {error && <p className="error">{error}</p>}
//       {licenseKey && (
//         <div className="generated-key">
//           <h2>Generated License Key:</h2>
//           <p>{licenseKey}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LicenseGenerator;

//================================================


// import React, { useState } from "react";
// import { generateLicenseKey } from "./licenseUtils"; // Import the function

// const LicenseGenerator = () => {
//   const [input, setInput] = useState(""); // For system ID input
//   const [email, setEmail] = useState(""); // For email input
//   const [phone, setPhone] = useState(""); // For phone number input
//   const [licenseKey, setLicenseKey] = useState(""); // For generated license
//   const [loading, setLoading] = useState(false); // To display loading state
//   const [error, setError] = useState(""); // To display any error message

//   // Retrieve the static identifier from the environment variable
//   const identifier = process.env.REACT_APP_IDENTIFIER;

//   // Function to validate the input fields
//   const validateFields = () => {
//     if (!input.trim()) return "System ID is required.";
//     if (!email.trim()) return "Email is required.";
//     if (!phone.trim()) return "Phone number is required.";
//     if (!identifier) return "Identifier is missing or invalid.";
//     return null;
//   };

//   // Function to call generateLicenseKey and generate the license key
//   const generateLicense = async () => {
//     setError(""); // Reset error state
//     setLoading(true); // Start loading

//     const validationError = validateFields();
//     if (validationError) {
//       setError(validationError);
//       setLoading(false);
//       return;
//     }

//     try {
//       // Artificial delay
//       await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay

//       const generatedKey = await generateLicenseKey(input, identifier); // Call generateLicenseKey
//       setLicenseKey(generatedKey.toUpperCase()); // Convert to uppercase and set the generated key
//     } catch (error) {
//       console.error("Error generating license:", error);
//       setError(error.message); // Set the error message
//     } finally {
//       setLoading(false); // End loading
//     }
//   };

//   return (
//     <div>
//       <h1>License Key Generator</h1>
//       <form onSubmit={(e) => e.preventDefault()}>
//         <div>
//           <label>System ID:</label>
//           <input
//             type="text"
//             placeholder="Enter System ID"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="tel"
//             placeholder="Enter Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </div>
//         <br />
//         <button onClick={generateLicense} disabled={loading}>
//           {loading ? "Generating..." : "Generate License Key"}
//         </button>
//       </form>
//       {error && <p className="error">{error}</p>}
//       {licenseKey && (
//         <div className="generated-key">
//           <h2>Generated License Key:</h2>
//           <p>{licenseKey}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LicenseGenerator;

import React, { useState } from "react";
import { generateLicenseKey } from "./licenseUtils"; // Import the function
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LicenseGenerator = () => {
  const [input, setInput] = useState(""); // For user input
  const [email, setEmail] = useState(""); // For email
  const [phone, setPhone] = useState(""); // For phone number
  const [licenseKey, setLicenseKey] = useState(""); // For generated license
  const [loading, setLoading] = useState(false); // To display loading state
  const [error, setError] = useState(""); // To display any error message

  const identifier = process.env.REACT_APP_IDENTIFIER; // Environment variable

  // Function to call generateLicenseKey and generate the license key
  const generateLicense = async () => {
    setError(""); // Reset error state
    setLoading(true); // Start loading

    // Validate inputs
    if (!input || !email || !phone) {
      toast.error("All fields are mandatory!");
      setLoading(false);
      return;
    }

    if (!identifier) {
      toast.error("Identifier is missing or invalid.");
      setLoading(false);
      return;
    }

    try {
      const generatedKey = await generateLicenseKey(input, identifier); // Call generateLicenseKey
      setLicenseKey(generatedKey.toUpperCase()); // Set the generated key in uppercase
      toast.success("License key generated successfully!");
    } catch (error) {
      console.error("Error generating license:", error);
      setError(error.message); // Set the error message
      toast.error("Failed to generate license key.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="container">
      <h1>License Key Generator</h1>

      <div>
        <label>System ID:</label>
        <input
          type="text"
          placeholder="Enter System ID"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Phone Number:</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button onClick={generateLicense} disabled={loading}>
        {loading ? "Generating..." : "Generate License Key"}
      </button>

      {error && <p className="error">{error}</p>}

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
