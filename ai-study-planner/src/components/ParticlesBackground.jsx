import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none"
      }}
      options={{
        background: {
          color: {
            value: "transparent"
          }
        },

        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 900
            }
          },

          color: {
            value: "#ffffff"
          },

          shape: {
            type: "circle"
          },

          opacity: {
            value: 0.5,
            random: true
          },

          size: {
            value: { min: 1, max: 3 }
          },

          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            outModes: {
              default: "out"
            }
          }
        },

        fullScreen: {
          enable: false
        }
      }}
    />
  );
};

export default ParticlesBackground;