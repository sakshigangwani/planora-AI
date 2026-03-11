import { useNavigate } from "react-router-dom";
import { FaBrain, FaGoogle } from "react-icons/fa";
import "../styles.css";
import ParticlesBackground from "../components/ParticlesBackground";

function Onboarding() {

    const navigate = useNavigate();

    const pill = {
        background: "#1C1C22",
        padding: "6px 14px",
        borderRadius: "20px",
        fontSize: "14px",
        color: "#A1A1AA",
        margin: "10px 5px"
    };

    return (
        <div className="animatedBackground">
            <ParticlesBackground />
            <FaBrain size={42} color="#A855F7" style={{ marginBottom: "15px" }} />
            <h1 style={{
                fontSize: "38px",
                fontWeight: "700",
                marginBottom: "8px"
            }}>Planora - Your AI Study Planner</h1>

            <p style={{
                color: "#A1A1AA",
                marginBottom: "20px",
                fontSize: "18px"
            }}>Plan smarter. Study better. Achieve more with AI.</p>

            <div style={{
                display: "flex",
                gap: "10px",
                marginBottom: "35px"
            }}>
                <span style={pill}>📅 Smart Scheduling</span>
                <span style={pill}>⚡ Focus Sessions</span>
                <span style={pill}>🤖 AI Optimization</span>
            </div>

            <div
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)"
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0px)";
                }}
                style={{
                    backdropFilter: "blur(18px)",
                    background: "rgba(28,28,34,0.65)",
                    padding: "40px",
                    borderRadius: "18px",
                    width: "420px",
                    textAlign: "center",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                    border: "1px solid rgba(255,255,255,0.05)",
                    transition: "all 0.3s ease"
                }}>
                <h2 style={{ marginBottom: "25px" }}>
                    Welcome 👋
                </h2>

                <button
                    style={{
                        width: "100%",
                        padding: "13px",
                        marginBottom: "15px",
                        borderRadius: "12px",
                        border: "1px solid #2A2A32",
                        background: "#141417",
                        color: "white",
                        fontSize: "14px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        transition: "all 0.25s ease"
                    }}
                >
                    <FaGoogle />
                    Continue with Google
                </button>

                <p style={{ color: "#6B7280", fontSize: "12px", marginBottom: "15px" }}>
                    or
                </p>

                <button
                    onClick={() => navigate("/login")}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow =
                            "0 10px 30px rgba(236,72,153,0.5)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0px)";
                        e.currentTarget.style.boxShadow =
                            "0 5px 20px rgba(168,85,247,0.4)";
                    }}
                    style={{
                        width: "100%",
                        padding: "13px",
                        marginBottom: "16px",
                        borderRadius: "12px",
                        border: "none",
                        background: "linear-gradient(135deg,#A855F7,#EC4899)",
                        color: "white",
                        fontWeight: "600",
                        fontSize: "15px",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                        boxShadow: "0 5px 20px rgba(168,85,247,0.4)"
                    }}
                >
                    Login
                </button>
                <button
                    onClick={() => navigate("/register")}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0px)";
                    }}
                    style={{
                        width: "100%",
                        padding: "13px",
                        borderRadius: "12px",
                        border: "1px solid #2A2A32",
                        background: "#141417",
                        color: "white",
                        fontSize: "15px",
                        cursor: "pointer",
                        transition: "all 0.25s ease"
                    }}
                >
                    Register
                </button>
                <p
                    style={{
                        marginTop: "20px",
                        fontSize: "12px",
                        color: "#6B7280"
                    }}
                >
                    Start building your personalized study routine in seconds.
                </p>
            </div>
        </div>
    );
}

export default Onboarding;