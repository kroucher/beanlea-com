import { Particles } from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect } from "react";

const ContactParticles = () => {
  const particlesInit = async (engine: any) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  };

  //   const particlesLoaded = useCallback(async (container: any) => {
  //     await console.log(container);
  //   }, []);

  return (
    <Particles
      className="h-full w-full"
      id="tsparticles"
      init={(engine: any) => particlesInit(engine)}
      options={{
        fullScreen: {
          zIndex: 1,
        },
        particles: {
          number: {
            value: 0,
          },
          color: {
            value: ["#7dd3fc", "#0ea5e9", "#1d4ed8"],
          },
          shape: {
            type: ["circle", "square"],
            options: {},
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              minimumValue: 0,
              speed: 2,
              startValue: "max",
              destroy: "min",
            },
          },
          size: {
            value: 4,
            random: {
              enable: true,
              minimumValue: 2,
            },
          },
          links: {
            enable: false,
          },
          life: {
            duration: {
              sync: true,
              value: 5,
            },
            count: 1,
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 10,
            },
            speed: {
              min: 10,
              max: 20,
            },
            decay: 0.1,
            direction: "none",
            straight: false,
            outModes: {
              default: "destroy",
              top: "none",
            },
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            direction: "random",
            // move: true,
            animation: {
              enable: true,
              speed: 60,
            },
          },
          tilt: {
            direction: "random",
            enable: true,
            move: true,
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 60,
            },
          },
          roll: {
            darken: {
              enable: true,
              value: 25,
            },
            enable: true,
            speed: {
              min: 15,
              max: 25,
            },
          },
          wobble: {
            distance: 30,
            enable: true,
            move: true,
            speed: {
              min: -15,
              max: 15,
            },
          },
        },
        emitters: {
          life: {
            count: 0,
            duration: 0.1,
            delay: 0.4,
          },
          rate: {
            delay: 0.1,
            quantity: 150,
          },
          size: {
            width: 0,
            height: 0,
          },
        },
      }}
    />
  );
};

export default ContactParticles;
