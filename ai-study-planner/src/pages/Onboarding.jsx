import { useNavigate } from "react-router-dom";
import { FaBrain, FaGoogle } from "react-icons/fa";
import "../styles.css";
import ParticlesBackground from "../components/ParticlesBackground";

function Onboarding() {

    const navigate = useNavigate();

    return (
        <div className="animatedBackground onboardingPage">
            <ParticlesBackground />
            <div className="onboardingContent">
                <FaBrain size={42} color="#A855F7" style={{ marginBottom: "15px" }} />
                <h1 className="onboardingTitle">Planora - Your AI Study Planner</h1>

                <p className="onboardingSubtitle">Plan smarter. Study better. Achieve more with AI.</p>

                <div className="onboardingPills">
                    <span className="onboardingPill">📅 Smart Scheduling</span>
                    <span className="onboardingPill">⚡ Focus Sessions</span>
                    <span className="onboardingPill">🤖 AI Optimization</span>
                </div>

                <div className="onboardingCard">
                    <h2 className="onboardingCardTitle">
                        Welcome 👋
                    </h2>

                    <button className="onboardingBtn onboardingBtnSecondary">
                        <FaGoogle />
                        Continue with Google
                    </button>

                    <p className="onboardingDivider">or</p>

                    <button
                        className="onboardingBtn onboardingBtnPrimary"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                    <button
                        className="onboardingBtn onboardingBtnSecondary"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </button>
                    <p className="onboardingNote">
                        Start building your personalized study routine in seconds.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Onboarding;