import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        name: "NASA",
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: {
              min: 0.1,
              max: 1,
            },
            animation: {
              enable: true,
              speed: 1,
              sync: false,
            },
          },
          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
          move: {
            enable: true,
            speed: {
              min: 0.1,
              max: 1,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            onClick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
        background: {
          color: "none",
          position: "50% 50%",
          repeat: "no-repeat",
          size: "20%",
        },
      }}
    />
  );
};

export default Particle;
