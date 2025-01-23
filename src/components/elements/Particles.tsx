import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useAppSelector } from "../../store";

const ParticlesElement = () => {
  const [init, setInit] = useState(false);
  const theme = useAppSelector(state => state.theme.theme);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    }).catch(() => {
      setInit(false);
    });
  }, []);

  return (
    <>
      {
        init && (
          <div className="absolute z-0 top-0 left-0 min-h-screen">
            <Particles
              id="tsparticles"
              options={{
                background: {
                  color: {
                    value: theme.bg
                  }
                },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: false,
                      mode: "repulse",
                    },
                  },
                  modes: {
                    push: {
                      quantity: 2,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: theme.primary,
                  },
                  links: {
                    color: theme.secondary,
                    distance: 200,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: .5,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                    },
                    value: 90,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "square",
                  },
                  size: {
                    value: { min: 1, max: 4 },
                  },
                },
                detectRetina: true,
              }}
            />
          </div>
        )
      }
    </>
  )
};

export default ParticlesElement;
