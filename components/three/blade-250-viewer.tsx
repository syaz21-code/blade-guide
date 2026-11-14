"use client";

import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as THREE from "three";

import {
  blade250ComponentById,
  blade250Components,
  type MotorcycleComponentId,
} from "@/content/three/motorcycle-components";

import { Blade250Model } from "./blade-250-model";

const overviewCamera = {
  position: [4.5, 2.55, 5.4] as [number, number, number],
  target: [0, 1.08, 0] as [number, number, number],
};

type CameraFocusProps = {
  position: [number, number, number];
  target: [number, number, number];
  resetKey: number;
};

function CameraFocus({ position, target, resetKey }: CameraFocusProps) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(...position);
    camera.lookAt(new THREE.Vector3(...target));
  }, [camera, position, resetKey, target]);

  return null;
}

export function Blade250Viewer() {
  const [selectedId, setSelectedId] = useState<MotorcycleComponentId | null>(null);
  const [exploded, setExploded] = useState(false);
  const [isolated, setIsolated] = useState(false);
  const [cameraResetKey, setCameraResetKey] = useState(0);

  const activeComponent = selectedId ? blade250ComponentById[selectedId] : null;
  const camera = activeComponent?.camera ?? overviewCamera;

  const selectComponent = (id: MotorcycleComponentId) => {
    setSelectedId(id);
    setIsolated(false);
  };

  const resetViewer = () => {
    setSelectedId(null);
    setExploded(false);
    setIsolated(false);
    setCameraResetKey((value) => value + 1);
  };

  return (
    <section aria-label="Interactive Blade 250 visual overview" className="overflow-hidden rounded-[28px] border border-white/10 bg-[#08090b] shadow-[0_28px_100px_rgba(0,0,0,0.26)]">
      <div className="grid xl:grid-cols-[minmax(0,1.36fr)_minmax(330px,0.64fr)]">
        <div className="relative min-h-[480px] border-b border-white/10 bg-[radial-gradient(circle_at_50%_28%,rgba(110,120,142,0.24),transparent_36%),linear-gradient(135deg,#0d0f13_0%,#050607_76%)] xl:min-h-[630px] xl:border-b-0 xl:border-r">
          <Canvas
            camera={{ fov: 38, position: overviewCamera.position }}
            dpr={[1, 1.5]}
            gl={{ antialias: true }}
            onPointerMissed={() => {
              setSelectedId(null);
              setIsolated(false);
            }}
            shadows
          >
            <color attach="background" args={["#08090b"]} />
            <ambientLight intensity={1.25} />
            <hemisphereLight args={["#cbd5e1", "#11131a", 1.5]} />
            <directionalLight castShadow intensity={2.6} position={[4, 6, 4]} shadow-mapSize-height={1024} shadow-mapSize-width={1024} />
            <pointLight color="#8fbdf2" distance={8} intensity={1.5} position={[-3, 2.5, 2]} />
            <CameraFocus position={camera.position} resetKey={cameraResetKey} target={camera.target} />
            <OrbitControls
              key={`${selectedId ?? "overview"}-${cameraResetKey}`}
              enableDamping
              enablePan
              maxDistance={9}
              maxPolarAngle={Math.PI / 2.02}
              minDistance={2.25}
              target={camera.target}
            />
            <group position={[0, 0.04, 0]}>
              <Blade250Model exploded={exploded} isolated={isolated} onSelect={selectComponent} selectedId={selectedId} />
            </group>
            <ContactShadows blur={2.4} color="#000000" frames={1} opacity={0.72} position={[0, 0, 0]} scale={7.2} />
          </Canvas>

          <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65 backdrop-blur sm:left-6 sm:top-6">
            Procedural visual model
          </div>
          <p className="pointer-events-none absolute bottom-4 left-4 right-4 text-center text-[11px] font-medium tracking-[0.04em] text-white/45 sm:bottom-6 sm:left-6 sm:right-auto sm:text-left">
            Drag to rotate · scroll to zoom · right-drag to pan · select any highlighted assembly
          </p>
        </div>

        <div className="flex min-h-[500px] flex-col p-5 sm:p-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8fbdf2]">Interactive overview</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-white">Explore the major assemblies.</h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
              Select a component in the model or this list to focus it, then isolate it or view the separated visual arrangement.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2" role="group" aria-label="3D viewer controls">
            <button
              aria-pressed={exploded}
              className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition ${exploded ? "border-[#8fbdf2]/70 bg-[#8fbdf2]/15 text-[#b9d5ff]" : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/25 hover:bg-white/[0.07]"}`}
              onClick={() => setExploded((value) => !value)}
              type="button"
            >
              {exploded ? "Assemble model" : "Explode model"}
            </button>
            <button
              aria-pressed={isolated}
              className={`rounded-xl border px-3 py-2.5 text-xs font-semibold transition disabled:cursor-not-allowed disabled:border-white/[0.06] disabled:bg-white/[0.025] disabled:text-white/25 ${isolated ? "border-[#8fbdf2]/70 bg-[#8fbdf2]/15 text-[#b9d5ff]" : "border-white/10 bg-white/[0.04] text-white/75 hover:border-white/25 hover:bg-white/[0.07]"}`}
              disabled={!selectedId}
              onClick={() => setIsolated((value) => !value)}
              type="button"
            >
              {isolated ? "Show full model" : "Isolate selection"}
            </button>
            <button
              className="col-span-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-semibold text-white/75 transition hover:border-white/25 hover:bg-white/[0.07]"
              onClick={resetViewer}
              type="button"
            >
              Reset camera and view
            </button>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/40">Assemblies</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
              {blade250Components.map((component) => {
                const selected = component.id === selectedId;

                return (
                  <button
                    aria-pressed={selected}
                    className={`rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition ${selected ? "border-[#8fbdf2]/70 bg-[#8fbdf2]/15 text-[#b9d5ff]" : "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"}`}
                    key={component.id}
                    onClick={() => selectComponent(component.id)}
                    type="button"
                  >
                    {component.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div aria-live="polite" className="mt-6 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
            {activeComponent ? (
              <>
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#8fbdf2]">Selected assembly</p>
                <h4 className="mt-2 text-lg font-semibold tracking-[-0.035em] text-white">{activeComponent.label}</h4>
                <p className="mt-2 text-sm leading-6 text-white/60">{activeComponent.description}</p>
                <p className="mt-3 text-xs leading-5 text-white/40">{activeComponent.manualReference}</p>
                <Link className="mt-4 inline-flex rounded-full border border-[#8fbdf2]/55 bg-[#8fbdf2]/10 px-3.5 py-2 text-xs font-semibold text-[#b9d5ff] transition hover:border-[#8fbdf2] hover:bg-[#8fbdf2]/20" href={activeComponent.relatedHref}>
                  {activeComponent.relatedLabel}
                </Link>
              </>
            ) : (
              <>
                <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-white/40">Selection guide</p>
                <p className="mt-2 text-sm leading-6 text-white/60">Choose an assembly to reveal its visual description, source reference and relevant service topic.</p>
              </>
            )}
          </div>

          <p className="mt-4 text-[11px] leading-5 text-white/38">
            This model is an approximate educational visualisation derived from the manual’s exterior references. It is not manufacturer CAD, a dimensioned drawing or a procedure.
          </p>
        </div>
      </div>
    </section>
  );
}
