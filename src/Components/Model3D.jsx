
import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader, extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

extend({ OrbitControls });

const Model = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url /*'/path/to/your/blender-model.gltf'*/);
  return <primitive object={gltf.scene} />;
};

const Controls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  useFrame(() => controlsRef.current && controlsRef.current.update());

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

const Model3D = ({ modelSrc }) => {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 5] }}>
                <Controls />
                <Suspense fallback={null}>
                    <Model url={modelSrc} />
                </Suspense>
            </Canvas>
        </>
    );
};

export default Model3D;
      