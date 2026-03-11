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
      options={{
        background: {
          color: {
            value: "#070710"
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
            value: { min: 2, max: 4 }
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
          enable: true,
          zIndex: -1
        }
      }}
    />
  );
};

export default ParticlesBackground;