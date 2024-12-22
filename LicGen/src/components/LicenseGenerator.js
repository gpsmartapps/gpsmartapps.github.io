// import React, { useState } from "react";
// import { generateLicenseKey } from "./licenseUtils"; // Import the function

// const LicenseGenerator = () => {
//   const [input, setInput] = useState(""); // For user input
//   const [licenseKey, setLicenseKey] = useState(""); // For generated license
//   const [loading, setLoading] = useState(false); // To display loading state
//   const [error, setError] = useState(""); // To display any error message
//   const [identifier, setIdentifier] = useState(""); // Identifier for license generation

//   // Function to call generateLicenseKey and generate the license key
//   const generateLicense = async () => {
//     setError(""); // Reset error state
//     setLoading(true); // Start loading

//     try {
//       console.log("Generating license with input:", input); // Debugging log

//       const generatedKey = await generateLicenseKey(input, identifier); // Call generateLicenseKey
//       setLicenseKey(generatedKey); // Set the generated key

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
//         placeholder="Enter input"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />
//       <br />
//       <input
//         type="text"
//         placeholder="Enter identifier (15 characters)"
//         value={identifier}
//         onChange={(e) => setIdentifier(e.target.value)}
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

import React, { useState } from "react";
import { generateLicenseKey } from "./licenseUtils"; // Import the function

const LicenseGenerator = () => {
  const [input, setInput] = useState(""); // For user input
  const [licenseKey, setLicenseKey] = useState(""); // For generated license
  const [loading, setLoading] = useState(false); // To display loading state
  const [error, setError] = useState(""); // To display any error message

  // Retrieve the static identifier from the environment variable
  const identifier = process.env.Lic_Secret
  console.log("Identifier from .env:", identifier);

  // Function to call generateLicenseKey and generate the license key
  const generateLicense = async () => {
    setError(""); // Reset error state
    setLoading(true); // Start loading

    // Check if identifier is valid
    if (!identifier) {
      setError("Identifier is missing or invalid.");
      setLoading(false);
      return;
    }

    try {
      console.log("Generating license with input:", input); // Debugging log

      const generatedKey = await generateLicenseKey(input, identifier); // Call generateLicenseKey
      setLicenseKey(generatedKey); // Set the generated key

    } catch (error) {
      console.error("Error generating license:", error);
      setError(error.message); // Set the error message
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div>
      <h1>License Key Generator</h1>
      <input
        type="text"
        placeholder="Enter System ID"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
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
    </div>
  );
};

export default LicenseGenerator;
