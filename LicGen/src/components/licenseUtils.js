export const generateLicenseKey = async (input, identifier) => {
  if (identifier.length !== 15) {
    throw new Error("Identifier must be 15 characters long.");
  }

  const sha256 = new TextEncoder().encode(input);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", sha256);
  const hexHash = Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hexHash.substring(0, 15);
};
