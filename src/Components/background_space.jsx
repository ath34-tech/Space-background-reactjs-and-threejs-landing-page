import * as THREE from 'three'
import { Canvas, useThree,useFrame,  extend} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import imagetxt from '../assets/circle.png'
import React,{Suspense,useEffect,useRef} from 'react'
import '../CSS/space_background.css'
import {Html} from '@react-three/drei'
import Navbar from './navbar'
extend({ OrbitControls });


const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 4}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
    />
  );
};
  
const Star=()=>{
    let positions=React.useMemo(()=>{
        let position=[]
        for(let i=0;i<6000;i++) {
            let x=Math.random()*600-300
            let y=Math.random()*600-300
            let z=Math.random()*600-300
            position.push(x,y,z)
        }
        return new Float32Array(position)
    },[])
    
    let base=new THREE.TextureLoader().load(imagetxt)
    const myref=useRef()
    useFrame(() => (myref.current.rotation.z=myref.current.rotation.x += 0.01))
    return(
        <points    
        ref={myref}
        >
            <bufferGeometry >
                <bufferAttribute
                attachObject={['attributes','position']}
                array={positions}
                count={positions.length / 3}
                itemSize={3}
              
                />
            </bufferGeometry>
            
            <pointsMaterial
        attach="material"
        map={base}
        color={0x00AAFF}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}   
      />
        </points>
        )
}

export default function Space(){

    return(
        <div className="anim">
          
        <Canvas
      colorManagement={false}
      camera={{ position: [100, 10, 0], fov: 75 }}
    >
     
      <CameraControls/>
      <Suspense fallback={null}>
        <Star />
      </Suspense>
      <Html className="html-section" fullscreen>
        <Navbar/>
        <div className="text-wrapper-heading">
        <h1 className="top-heading">This is biggest heading</h1>
        {/* <h3 className="second-heading">This is second biggest heading</h3> */}
        <p className="italic-stylish">"Some kind of motivational thing "- company moto</p>
        {/* <p className="body-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui saepe, laboriosam obcaecati porro, voluptas minima perspiciatis delectus rem et sunt, fugit minus molestias? Ut aspernatur, a voluptates voluptatem nostrum error!</p> */}
        <div className="buttonWrap">
            <button><i class="fab fa-github"></i>VISIT MY GITHUB</button>
            <button>VISIT MY INSTAGRAM</button>
            </div>
        </div>
        
      </Html>
    </Canvas>
    </div>
    )
}