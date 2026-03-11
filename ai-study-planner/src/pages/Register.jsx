import { useNavigate } from "react-router-dom";
import { FaGoogle, FaBrain } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";

function Register() {

  const navigate = useNavigate();

  const container = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#070b1a",
    fontFamily: "Inter, sans-serif"
  };

  const card = {
    width: "900px",
    height: "600px",
    display: "flex",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 30px 60px rgba(0,0,0,0.6)"
  };

  const leftPanel = {
    width: "50%",
    background: "linear-gradient(135deg,#7C3AED,#EC4899)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
    padding: "40px",
    position: "relative"
  };

  const rightPanel = {
    width: "50%",
    background: "#111322",
    padding: "55px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "white"
  };

  const input = {
    width: "100%",
    padding: "12px",
    marginBottom: "18px",
    borderRadius: "10px",
    border: "1px solid #2A2A32",
    background: "#141417",
    color: "white",
    outline: "none",
    fontSize: "14px"
  };

  const googleBtn = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #2A2A32",
    background: "#141417",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
    marginBottom: "20px"
  };

  const registerBtn = {
    width: "100%",
    padding: "13px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg,#A855F7,#EC4899)",
    color: "white",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer"
  };
  

  return (
    <div style={container}>
      <ParticlesBackground />

      <div style={card}>

        {/* LEFT SIDE (Gradient Info) */}

        <div style={leftPanel}>

          <div style={{
            position: "absolute",
            top: "60px",
            left: "60px",
            background: "rgba(255,255,255,0.15)",
            padding: "8px 14px",
            borderRadius: "12px",
            fontSize: "14px",
            backdropFilter: "blur(6px)"
          }}>
            🤖 AI Optimization
          </div>

          <div style={{
            position: "absolute",
            top: "80px",
            right: "60px",
            background: "rgba(255,255,255,0.15)",
            padding: "8px 14px",
            borderRadius: "12px",
            fontSize: "14px",
            backdropFilter: "blur(6px)"
          }}>
            📊 Study Analytics
          </div>

          <div style={{
            position: "absolute",
            bottom: "90px",
            right: "60px",
            background: "rgba(255,255,255,0.15)",
            padding: "8px 14px",
            borderRadius: "12px",
            fontSize: "14px",
            backdropFilter: "blur(6px)"
          }}>
            ⚡ Focus Sessions
          </div>

          <div style={{
            position: "absolute",
            bottom: "70px",
            left: "60px",
            background: "rgba(255,255,255,0.15)",
            padding: "8px 14px",
            borderRadius: "12px",
            fontSize: "14px",
            backdropFilter: "blur(6px)"
          }}>
            📅 Smart Planner
          </div>

          <h1 style={{ fontSize: "36px", fontWeight: "700", marginBottom: "10px" }}>
            Planora
          </h1>

          <p style={{ width: "70%", fontSize: "16px", opacity: 0.9 }}>
            Plan smarter. Study better. AI powered study planner
            for focused learning.
          </p>

        </div>

        {/* RIGHT SIDE (Register Form) */}

        <div style={rightPanel}>

          <FaBrain size={26} color="#A855F7" style={{ marginBottom: "10px" }} />

          <h2 style={{ marginBottom: "6px" }}>
            Create Account
          </h2>

          <p style={{ color: "#9CA3AF", fontSize: "13px", marginBottom: "20px" }}>
            Start building your AI study plan.
          </p>

          <button style={googleBtn}>
            <FaGoogle /> Continue with Google
          </button>

          <p style={{ textAlign: "center", color: "#6B7280", fontSize: "12px", marginBottom: "15px" }}>
            or
          </p>

          <input type="text" placeholder="Full Name" style={input} />
          <input type="email" placeholder="Email" style={input} />
          <input type="password" placeholder="Password" style={input} />
          <input type="password" placeholder="Confirm Password" style={input} />

          <button style={registerBtn} onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
          }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}>
            Register
          </button>

          <p style={{ marginTop: "18px", fontSize: "13px", color: "#9CA3AF" }}>
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ color: "#EC4899", cursor: "pointer" }}
            >
              Login
            </span>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;