export default function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight position={[-4, 2, -4]} intensity={0.8} color="#3b82f6" />
      <pointLight position={[4, -2, 4]} intensity={0.5} color="#0ea5e9" />
      <spotLight
        position={[0, 8, 0]}
        angle={0.4}
        penumbra={0.6}
        intensity={1.0}
        castShadow
        color="#e0f2fe"
      />
    </>
  )
}
