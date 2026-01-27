import React, { useEffect, useRef } from "react";

const VantaBackground = ({ children }) => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    let canceled = false;

    const loadVanta = async () => {
      if (typeof window === "undefined" || vantaEffect.current) return;

      const [NET, THREE] = await Promise.all([
        import("vanta/dist/vanta.net.min.js"),
        import("three"),
      ]);

      if (canceled) return;

      THREE.MeshStandardMaterial.prototype.vertexColors = false;
      THREE.MeshBasicMaterial.prototype.vertexColors = false;
      THREE.MeshPhongMaterial.prototype.vertexColors = false;

      vantaEffect.current = NET.default({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 0.5,
        scaleMobile: 0.7,
        color: 0xd946ef,
        backgroundColor: 0x0f0a1a,
        points: 4,
        maxDistance: 10,
        spacing: 6,
      });
    };

    loadVanta();

    return () => {
      canceled = true;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={vantaRef}
        className="fixed inset-0 -z-10"
        style={{
          pointerEvents: "none",
          backgroundColor: "#0f0a1a",
        }}
      />
      <div>{children}</div>
    </div>
  );
};

export default VantaBackground;
