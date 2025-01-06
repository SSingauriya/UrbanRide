import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicalPanelRef = useRef(null);
  const confirmRidePanalRef = useRef(null);
  const [vechilePanalOpen, setVechilePanalOpen] = useState(false);
  const [confirmRidePanal, setConfirmRidePanal] = useState(false);

  const [vehicleFound, setVehicleFound] = useState(false);
  const vechicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Pickup:", pickup, "Destination:", destination);
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: "75%", duration: 0.5 });
      gsap.to(panelCloseRef.current, { opacity: 1, duration: 0.3 });
    } else {
      gsap.to(panelRef.current, { height: "0%", duration: 0.5 });
      gsap.to(panelCloseRef.current, { opacity: 0, duration: 0.3 });
    }
  }, [panelOpen]);

  useGSAP(
    function () {
      if (vechilePanalOpen) {
        gsap.to(vehicalPanelRef.current, { transform: "translateY(0)" });
      } else {
        gsap.to(vehicalPanelRef.current, { transform: "translateY(100%)" });
      }
    },
    [vechilePanalOpen]
  );

  useGSAP(
    function () {
      if (confirmRidePanal) {
        gsap.to(confirmRidePanalRef.current, { transform: "translateY(0)" });
      } else {
        gsap.to(confirmRidePanalRef.current, { transform: "translateY(100%)" });
      }
    },
    [confirmRidePanal]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vechicleFoundRef.current, { transform: "translateY(0)" });
      } else {
        gsap.to(vechicleFoundRef.current, { transform: "translateY(100%)" });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, { transform: "translateY(0)" });
      } else {
        gsap.to(waitingForDriverRef.current, { transform: "translateY(100%)" });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />
      <div className="h-screen w-screen">
        {/* Temporary Background Image */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Background"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] relative p-6 bg-white">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 top-6 right-6 text-2xl cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-800 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0 overflow-hidden">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVechilePanalOpen={setVechilePanalOpen}
          />
        </div>
      </div>
      <div
        ref={vehicalPanelRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 pt-12 px-3 py-10"
      >
        <VehiclePanel
          setConfirmRidePanal={setConfirmRidePanal}
          setVechilePanalOpen={setVechilePanalOpen}
        />
      </div>

      <div
        ref={confirmRidePanalRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 pt-12 px-3 py-6"
      >
        <ConfirmRide
          setVehicleFound={setVehicleFound}
          setConfirmRidePanal={setConfirmRidePanal}
        />
      </div>

      <div
        ref={vechicleFoundRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 pt-12 px-3 py-6"
      >
        <LookingForDriver
          setVehicleFound={setVehicleFound}
          setConfirmRidePanal={setConfirmRidePanal}
        />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bg-white bottom-0 pt-12 px-3 py-6"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
