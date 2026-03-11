import { useNavigate } from "react-router-dom";
import { FaGoogle, FaBrain } from "react-icons/fa";
import ParticlesBackground from "../components/ParticlesBackground";

function Login() {

  const navigate = useNavigate();
  return (
    <div
      className="loginPage"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top,#0b0b2d,#04040f)",
        padding: "20px",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto"
      }}
    >

      <ParticlesBackground />

      <div
        className="loginCard"
        style={{
          display: "flex",
          width: "900px",
          maxWidth: "100%",
          background: "#151520",
          borderRadius: "20px",
          overflow: "hidden",
          flexWrap: "wrap",
          boxShadow: "0 0 40px rgba(168,85,247,0.15), 0 0 120px rgba(236,72,153,0.08)",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* LEFT LOGIN FORM */}

        <div
          className="loginPane loginLeftPane"
          style={{
            flex: "1",
            minWidth: "300px",
            padding: "45px",
            display: "flex",
            flexDirection: "column",
            gap: "15px"
          }}
        >

          <FaBrain size={28} color="#A855F7" />

          <h2
            style={{
              fontSize: "26px",
              color: "white"
            }}
          >
            Welcome Back
          </h2>

          <p
            style={{
              color: "#9CA3AF",
              fontSize: "14px",
              marginBottom: "10px"
            }}
          >
            Login to continue planning your study sessions.
          </p>

          {/* GOOGLE LOGIN */}

          <button
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #2A2A32",
              background: "#141417",
              color: "white",
              cursor: "pointer"
            }}
          >
            <FaGoogle /> Continue with Google
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#6B7280",
              fontSize: "16px"
            }}
          >
            or
          </p>

          {/* EMAIL */}

          <input
            placeholder="Email"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #2A2A32",
              background: "#0F0F14",
              color: "white",
              outline: "none"
            }}
          />

          {/* PASSWORD */}

          <input
            placeholder="Password"
            type="password"
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px",
              borderRadius: "10px",
              border: "1px solid #2A2A32",
              background: "#0F0F14",
              color: "white",
              outline: "none"
            }}
          />

          {/* LOGIN BUTTON */}

          <button
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}

            style={{
              width: "100%",
              marginTop: "10px",
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              background: "linear-gradient(135deg,#A855F7,#EC4899)",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 5px 20px rgba(168,85,247,0.4)",
              transition: "all 0.2s ease"
            }}
          >
            Login
          </button>

          <p
            style={{
              fontSize: "13px",
              color: "#9CA3AF"
            }}
          >
            Not registered?
            <span
              onClick={() => navigate("/register")}
              style={{
                color: "#A855F7",
                cursor: "pointer",
                marginLeft: "5px"
              }}
            >
              Create an account
            </span>
          </p>

        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          className="loginPane loginRightPane"
          style={{
            flex: "1",
            minWidth: "300px",
            background: "linear-gradient(160deg,#7C3AED,#9333EA,#EC4899)",
            color: "white",
            padding: "45px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
        >

          <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
            Planora
          </h1>

          <p
            style={{
              maxWidth: "260px",
              lineHeight: "1.6",
              opacity: "0.9",
              marginBottom: "40px"
            }}
          >
            Plan smarter. Study better.
            AI powered study planner for focused learning.
          </p>


          {/* Floating UI Cards */}

          <div
            className="loginFloatingTag"
            style={{
              position: "absolute",
              top: "120px",
              left: "40px",
              background: "rgba(255,255,255,0.15)",
              padding: "12px 16px",
              borderRadius: "12px",
              backdropFilter: "blur(8px)"
            }}
          >
            📅 Smart Planner
          </div>

          <div
            className="loginFloatingTag"
            style={{
              position: "absolute",
              bottom: "120px",
              right: "40px",
              background: "rgba(255,255,255,0.15)",
              padding: "12px 16px",
              borderRadius: "12px",
              backdropFilter: "blur(8px)"
            }}
          >
            ⚡ Focus Sessions
          </div>

          <div
            className="loginFloatingTag"
            style={{
              position: "absolute",
              bottom: "60px",
              left: "60px",
              background: "rgba(255,255,255,0.15)",
              padding: "12px 16px",
              borderRadius: "12px",
              backdropFilter: "blur(8px)"
            }}
          >
            🤖 AI Optimization
          </div>

          <div
            className="loginFloatingTag"
            style={{
              position: "absolute",
              top: "70px",
              right: "60px",
              background: "rgba(255,255,255,0.15)",
              padding: "12px 16px",
              borderRadius: "12px",
              backdropFilter: "blur(8px)",
              fontSize: "14px"
            }}
          >
            📊 Study Analytics
          </div>

        </div>

      </div>

    </div>

  );
}

export default Login;