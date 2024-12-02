import React from "react";
import { supabase } from "./supabaseClient";

const AuthPage: React.FC = () => {
  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "http://localhost:3000", // Update this to your redirect URI
        },
      });

      if (error) {
        console.error("Google Login Error:", error.message);
      } else {
        console.log("Redirecting to Google login...");
      }
    } catch (error) {
      console.error("Unexpected error during Google sign-in:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "60%",
          maxWidth: "800px",
          background: "white",
          padding: "20px 40px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ textAlign: "center", flex: 1 }}>
          <h2 style={{ margin: "10px 0", color: "#4CAF50" }}>Enjoy saving drafts</h2>
          <h2 style={{ margin: "10px 0", color: "#4CAF50" }}>Tailoring resume</h2>
          <h2 style={{ margin: "10px 0", color: "#4CAF50" }}>AI-assistance</h2>
          <p style={{ fontSize: "16px", marginTop: "20px", color: "#000" }}>
            Everything available to <span style={{ fontWeight: "bold", color: "#0056b3" }}>signed-in users</span>
          </p>
        </div>

        <div style={{ flex: 1, paddingLeft: "40px" }}>
          <h2 style={{ color: "#0056b3", marginBottom: "20px" }}>Authentication</h2>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              placeholder="Email"
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "16px",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
              <input type="checkbox" id="keepSignedIn" style={{ marginRight: "10px" }} />
              <label htmlFor="keepSignedIn" style={{ fontSize: "14px" }}>Don't sign out</label>
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#0056b3",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Sign in
            </button>
          </form>
          <p style={{ marginTop: "20px", fontSize: "14px", textAlign: "center" }}>
            Other options
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <button
              style={{
                backgroundColor: "#0077b5",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              in
            </button>
            <button
              onClick={handleGoogleLogin} // Attach the function here
              style={{
                backgroundColor: "#db4a39",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
