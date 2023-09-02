import React, { useRef, Suspense } from "react";
import { useFrame, Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import { easing } from "maath";
import { useSnapshot } from "valtio";

import state from "../store";
import Shirt from "./Shirt";

const CameraRig = ({ children }) => {
  const group = useRef();
  const snape = useSnapshot(state);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // set the initial position of the model
    let targetPostition = [-0.4, 0, 2];

    if (snape.into) {
      if (isBreakpoint) targetPostition = [0, 0, 2];
      if (isMobile) targetPostition = [0, 0.2, 2.5];
    } else {
      if (isMobile) targetPostition = [0, 0.2, 2.5];
      else targetPostition = [0, 0, 2];
    }

    // set model camera position
    easing.damp3(state.camera.position, targetPostition, 1, delta);

    // set model rotation smoothly
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 5, -state.pointer.x / 2.5, 0],
      0.25,
      delta
    );
  });

  return <group ref={group}>{children}</group>;
};

// const CameraRig = ({}) => {
//   return (
//     <Canvas
//     // frameloop="demand"
//     // shadows
//     // camera={{ position: [20, 3, 5], fov: 25 }}
//     // gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Shirt />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

export default CameraRig;
