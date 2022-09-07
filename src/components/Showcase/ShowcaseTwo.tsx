import { Center, ContactShadows, Environment, Html, MeshReflectorMaterial, PresentationControls, Text3D, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSpring } from "react-spring";
import { a as three } from '@react-spring/three'
import { a as web } from '@react-spring/web'
import * as THREE from "three";
import type { MacGLTFResult } from "./Mac";
import { OrbitControls } from "three-stdlib";


function Model({ open, hinge, ...props }: {
    open: boolean;
    hinge: any;
}) {
    const { viewport } = useThree()
    const group = useRef<any>(null);
    // Load model
    const { nodes, materials } = useGLTF('/mac-draco-praxis.glb') as MacGLTFResult
    // Take care of cursor state on hover
    const [hovered, setHovered] = useState(false)
    const [visitHovered, setVisitHovered] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    // Make it float in the air when it's opened
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (group.current) {
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, open ? Math.cos(t / 10) / 10 + 0.25 : 0, 0.1)
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, open ? Math.sin(t / 10) / 4 : 0, 0.1)
            group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, open ? Math.sin(t / 10) / 10 : 0, 0.1)
            group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, open ? (-2 + Math.sin(t)) / 3 : -4.3, 0.1)
        }
    })
    return (
        <group

            ref={group}
            {...props}
            onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
            onPointerOut={(e) => setHovered(false)}
            dispose={null}
            scale={viewport.width > 70 && open ? viewport.width / 40 : viewport.width > 70 && !open ? viewport.width / 0 : 2.2}>
            <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
                <Center rotation={[-1.6, 0, 0]} position={[0, 0, -3]}>
                    <Text3D
                        scale={open ? 0 : 1}
                        material={new THREE.MeshToonMaterial({ color: "#F5E7DD" })}
                        font="/Inter_Bold.json">
                        {`Praxis Lawyers`}
                        <meshPhongMaterial color="#F5E7DD" />
                    </Text3D>
                </Center>

                <Center
                    onPointerOver={(e) => (e.stopPropagation(), setVisitHovered(true))}
                    onPointerOut={(e) => setVisitHovered(false)}
                    rotation={[0, 0, 0]}
                    position={[0, -3.5, 7]}>
                    <Text3D
                        scale={open ? 1 : 0}
                        font="/Kumar_One.json"

                    >

                        <Html transform as="span" className="text-white font-kumar text-3xl sm:text-5xl font-thin box-border hover:text-blue-400 cursor-pointer border px-2 pt-4 pb-1 rounded-md">
                            <a
                                href="https://www.praxislawyers.com.au/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2"
                            >

                                {`Visit`}</a>
                        </Html>
                        <meshPhongMaterial color="#F5E7DD" />
                    </Text3D>
                </Center>

                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials.aluminium} geometry={nodes['Cube008'].geometry} />
                    <mesh material={materials['matte.001']} geometry={nodes['Cube008_1'].geometry} />
                    <mesh material={materials['screen.001']} geometry={nodes['Cube008_2'].geometry} />
                </group>
                <Center
                    rotation={[0, 0, 0]}
                    position={[0, 7, 0]}>

                    <Text3D
                        scale={open ? 1 : 0}
                        material={new THREE.MeshToonMaterial({ color: "#F5E7DD" })}
                        font="/Inter_Bold.json">
                        {`Praxis Lawyers.`}
                        <meshPhongMaterial color="#F5E7DD" />
                    </Text3D>
                </Center>
            </three.group>

            <mesh material={materials.keys} geometry={nodes.keyboard.geometry} position={[1.79, 0, 3.45]} />
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={nodes['Cube002'].geometry} />
                <mesh material={materials.trackpad} geometry={nodes['Cube002_1'].geometry} />
            </group>
            <mesh material={materials.touchbar} geometry={nodes.touchbar.geometry} position={[0, -0.03, 1.2]} />

        </group >
    )
}


const ShowcaseTwo = () => {
    const [open, setOpen] = useState(true)
    const props = useSpring({ open: Number(open) })
    return (

        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -60], fov: 35 }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[0, 5, 10]} />
                <PresentationControls
                    global
                    config={{ mass: 2, tension: 500 }}
                    snap={{ mass: 4, tension: 1500 }}
                    polar={[-Math.PI / 3, Math.PI / 3]}
                    azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
                    <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
                        <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
                    </group>
                    <Environment preset="city" />
                </PresentationControls>
                <ContactShadows position={[0, -5.5, -1]} opacity={0.4} scale={30} blur={1.75} far={5.5} color="white" />
            </Suspense>
        </Canvas>

    );
}

export default ShowcaseTwo;