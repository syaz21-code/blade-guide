"use client";

import { ContactShadows } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import * as THREE from "three";

import { Blade250Model } from "@/components/three/blade-250-model";
import { blade250ComponentById, type MotorcycleComponentId } from "@/content/three/motorcycle-components";
import { specificationScenes } from "@/content/three/specification-scenes";

const displayFont = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontOpticalSizing: "auto" as const,
};

type ScrollCameraControllerProps = {
  sceneProgress: number;
  reducedMotion: boolean;
  modelRef: RefObject<THREE.Group | null>;
};

function getSceneCamera(progress: number) {
  const lastSceneIndex = specificationScenes.length - 1;
  const clampedProgress = THREE.MathUtils.clamp(progress, 0, lastSceneIndex);
  const lowerIndex = Math.floor(clampedProgress);
  const upperIndex = Math.min(lowerIndex + 1, lastSceneIndex);
  const blend = THREE.MathUtils.smootherstep(clampedProgress - lowerIndex, 0, 1);
  const lowerScene = specificationScenes[lowerIndex].camera;
  const upperScene = specificationScenes[upperIndex].camera;

  return {
    position: new THREE.Vector3(...lowerScene.position).lerp(new THREE.Vector3(...upperScene.position), blend),
    target: new THREE.Vector3(...lowerScene.target).lerp(new THREE.Vector3(...upperScene.target), blend),
    rotationY: THREE.MathUtils.lerp(lowerScene.rotationY, upperScene.rotationY, blend),
  };
}

function ScrollCameraController({ sceneProgress, reducedMotion, modelRef }: ScrollCameraControllerProps) {
  const { camera } = useThree();
  const lookTarget = useRef(new THREE.Vector3());
  const hasInitialised = useRef(false);

  useFrame((_, delta) => {
    const sceneCamera = getSceneCamera(sceneProgress);
    const damping = reducedMotion ? 1 : 1 - Math.exp(-delta * 3.4);

    if (!hasInitialised.current) {
      camera.position.copy(sceneCamera.position);
      lookTarget.current.copy(sceneCamera.target);
      hasInitialised.current = true;
    } else {
      camera.position.lerp(sceneCamera.position, damping);
      lookTarget.current.lerp(sceneCamera.target, damping);
    }

    camera.lookAt(lookTarget.current);

    if (modelRef.current) {
      modelRef.current.rotation.y = THREE.MathUtils.lerp(modelRef.current.rotation.y, sceneCamera.rotationY, damping);
    }
  });

  return null;
}

function SpecificationEntryList({ entryCount, sceneId }: { entryCount: number; sceneId: string }) {
  const scene = specificationScenes.find((item) => item.id === sceneId);

  if (!scene) {
    return null;
  }

  return (
    <dl className={`mt-7 grid gap-3 lg:relative lg:left-[30px] lg:w-[calc(100%-30px)] ${entryCount > 4 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
      {scene.entries.map((entry) => (
        <div className="spec-glass rounded-xl border border-white/10 px-4 py-3" key={entry.title}>
          <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#c2cbd8]">{entry.title}</dt>
          <dd className="mt-1.5 text-[17px] font-medium leading-6 text-[#f5f5f5]">{entry.specification}</dd>
          <p className="mt-1 text-[13px] leading-5 text-[#c2cbd8]">Manual p. {entry.manualPage}</p>
        </div>
      ))}
    </dl>
  );
}

function HeroQuickSpecifications() {
  const overviewScene = specificationScenes[0];

  return (
    <aside className="w-full rounded-2xl border border-white/15 bg-[#080d18]/30 p-5 backdrop-blur-md lg:relative lg:left-[30px] lg:max-w-[300px]" aria-label="Quick specifications">
      <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#c2cbd8]">Quick specifications</p>
      <dl className="mt-4 grid gap-2">
        {overviewScene.entries.map((entry) => (
          <div className="spec-glass rounded-xl border border-white/10 px-4 py-3" key={entry.title}>
            <dt className="text-[13px] font-semibold uppercase tracking-[0.12em] text-[#c2cbd8]">{entry.title}</dt>
            <dd className="mt-1 text-[17px] font-medium leading-6 text-[#f5f5f5]">{entry.specification}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-[13px] leading-5 text-[#c2cbd8]">Maximum power is not included because it is not documented in the supplied source table.</p>
    </aside>
  );
}

function ScenePanel({ sceneIndex, activeIndex, animated, onExplore, onReturnHome }: { sceneIndex: number; activeIndex: number; animated: boolean; onExplore: () => void; onReturnHome: () => void }) {
  const scene = specificationScenes[sceneIndex];
  const isActive = sceneIndex === activeIndex;
  const offsetClass = scene.alignment === "right" ? "lg:ml-auto" : "lg:mr-auto";
  const transitionClass = !animated || isActive ? "translate-y-0 opacity-100" : "lg:pointer-events-none lg:translate-y-5 lg:opacity-0";

  if (scene.id === "overview") {
    return (
      <div className={`pointer-events-auto w-full transition-[opacity,transform] duration-500 ${transitionClass}`}>
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(240px,0.9fr)_minmax(0,1.1fr)_300px] lg:gap-10">
          <div className="max-w-md">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#9297a3]">{scene.eyebrow}</p>
            <h1 className="mt-5 text-[clamp(4rem,8vw,8rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#f5f5f5]" style={displayFont}>
              Blade<br />250
            </h1>
            <p className="mt-7 max-w-sm text-sm leading-6 text-[#9297a3] sm:text-base">{scene.description}</p>
            <button className="mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5f5f5] transition-colors hover:text-[#b9d5ff]" onClick={onExplore} type="button">
              Explore specifications <span aria-hidden="true" className="text-lg leading-none">↓</span>
            </button>
          </div>
          <div className="hidden lg:block" aria-hidden="true" />
          <HeroQuickSpecifications />
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9297a3] lg:mt-16">
          <span>Scroll to discover</span>
          <span>01 / 07</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`pointer-events-auto w-full max-w-xl transition-[opacity,transform] duration-500 ${offsetClass} ${transitionClass}`}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b9d5ff]">{scene.number} / 07 · {scene.eyebrow}</p>
      <h2 className="mt-4 text-5xl font-semibold leading-[1.02] tracking-[-0.055em] text-[#f5f5f5] sm:text-6xl" style={displayFont}>{scene.title}</h2>
      <p className="mt-5 max-w-lg text-sm leading-6 text-[#9297a3] sm:text-base">{scene.description}</p>
      <SpecificationEntryList entryCount={scene.entries.length} sceneId={scene.id} />
      {scene.id === "dimensions" ? (
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link className="inline-flex rounded-full bg-[#f5f5f5] px-4 py-2.5 text-xs font-semibold text-[#080d18] transition-transform hover:-translate-y-0.5" href="/maintenance">
            Continue to maintenance
          </Link>
          <button className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b9d5ff] transition-colors hover:text-white" onClick={onReturnHome} type="button">
            Return to overview
          </button>
        </div>
      ) : null}
    </div>
  );
}

export function SpecificationsStory() {
  const storyRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<Array<HTMLElement | null>>([]);
  const modelRef = useRef<THREE.Group>(null);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [selectedId, setSelectedId] = useState<MotorcycleComponentId | null>(null);

  const activeSceneIndex = Math.min(specificationScenes.length - 1, Math.max(0, Math.round(sceneProgress)));
  const activeScene = specificationScenes[activeSceneIndex];
  const selectedComponent = selectedId ? blade250ComponentById[selectedId] : null;

  useEffect(() => {
    const motionMedia = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopMedia = window.matchMedia("(min-width: 1024px)");
    const updatePreferences = () => {
      setReducedMotion(motionMedia.matches);
      setIsDesktop(desktopMedia.matches);
    };

    updatePreferences();
    motionMedia.addEventListener("change", updatePreferences);
    desktopMedia.addEventListener("change", updatePreferences);

    return () => {
      motionMedia.removeEventListener("change", updatePreferences);
      desktopMedia.removeEventListener("change", updatePreferences);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion || !storyRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const storyElement = storyRef.current;
    const stageElement = stageRef.current;
    const driver = { value: 0 };
    const context = gsap.context(() => {
      if (isDesktop && stageElement) {
        ScrollTrigger.create({
          anticipatePin: 1,
          end: "bottom bottom",
          pin: stageElement,
          pinSpacing: false,
          start: "top top",
          trigger: storyElement,
        });
      }

      gsap.to(driver, {
        ease: "none",
        value: specificationScenes.length - 1,
        onUpdate: () => setSceneProgress(driver.value),
        scrollTrigger: {
          end: "bottom bottom",
          invalidateOnRefresh: true,
          scrub: 0.35,
          start: "top top",
          trigger: storyElement,
        },
      });
    }, storyElement);

    return () => context.revert();
  }, [isDesktop, reducedMotion]);

  useEffect(() => {
    if (!reducedMotion) return;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const index = sceneRefs.current.indexOf(entry.target as HTMLElement);
          if (index >= 0) setSceneProgress(index);
        }
      }
    }, { rootMargin: "-30% 0px -50% 0px" });
    sceneRefs.current.forEach((scene) => { if (scene) observer.observe(scene); });
    return () => observer.disconnect();
  }, [reducedMotion]);

  const scrollToScene = (index: number) => {
    setSceneProgress(index);
    sceneRefs.current[index]?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  const highlightedIds = useMemo(() => activeScene.componentIds, [activeScene]);

  return (
    <section ref={storyRef} className="relative overflow-clip bg-[#080d18] text-[#f5f5f5]" aria-label="Blade 250 scroll-driven specifications">
      <div ref={stageRef} className="relative h-[62svh] overflow-hidden bg-[#080d18] lg:h-svh">
        <Canvas camera={{ fov: 38, position: specificationScenes[0].camera.position }} dpr={[1, 1.65]} gl={{ antialias: true }} onPointerMissed={() => setSelectedId(null)} shadows>
          <color attach="background" args={["#080d18"]} />
          <fog attach="fog" args={["#080d18", 7, 15]} />
          <ambientLight intensity={1.12} />
          <hemisphereLight args={["#dcecff", "#080d18", 1.5]} />
          <directionalLight castShadow color="#f5f5f5" intensity={2.35} position={[4.5, 5.6, 4.4]} shadow-mapSize-height={1024} shadow-mapSize-width={1024} />
          <pointLight color="#78aee8" distance={8} intensity={1.4} position={[-3, 3, 2]} />
          <ScrollCameraController modelRef={modelRef} reducedMotion={reducedMotion} sceneProgress={sceneProgress} />
          <group ref={modelRef} position={[0, 0.04, 0]}>
            <Blade250Model exploded={false} highlightedIds={highlightedIds} isolated={false} onSelect={setSelectedId} selectedId={selectedId} />
          </group>
          <ContactShadows blur={2.5} color="#000000" frames={1} opacity={0.66} position={[0, 0, 0]} scale={7.2} />
        </Canvas>

        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 overflow-hidden whitespace-nowrap text-center text-[clamp(7rem,19vw,22rem)] font-black italic leading-none tracking-[-0.12em] text-white/[0.035] lg:block" style={displayFont}>
          BLADE 250
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#080d18]/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080d18]/70 to-transparent" />

        <div className="pointer-events-none absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9297a3] sm:left-8 sm:top-7 lg:left-10">
          Live visual reference
        </div>
        {selectedComponent ? (
          <div className="site-glass absolute bottom-5 left-5 z-30 max-w-xs rounded-2xl border border-white/10 bg-[#0d1523]/95 p-4 shadow-xl backdrop-blur-xl sm:left-8 sm:bottom-7 lg:left-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b9d5ff]">Selected component</p>
            <p className="mt-1 text-sm font-semibold text-white">{selectedComponent.label}</p>
            <p className="mt-2 text-xs leading-5 text-white/70">{selectedComponent.description}</p>
            <div className="mt-3 flex items-center gap-4 text-xs font-semibold">
              <Link className="text-[#b9d5ff] hover:text-white" href={selectedComponent.relatedHref}>{selectedComponent.relatedLabel} →</Link>
              <button className="text-white/60 hover:text-white" onClick={() => setSelectedId(null)} type="button">Close</button>
            </div>
          </div>
        ) : null}

        <nav aria-label="Specification scenes" className="absolute right-5 top-1/2 z-20 hidden -translate-y-1/2 gap-2 lg:flex lg:flex-col">
          {specificationScenes.map((scene, index) => {
            const active = index === activeSceneIndex;

            return (
              <button
                aria-current={active ? "step" : undefined}
                aria-label={`Go to scene ${scene.number}: ${scene.title}`}
                className={`group flex items-center justify-end gap-2 text-right text-[10px] font-semibold uppercase tracking-[0.14em] transition ${active ? "text-[#f5f5f5]" : "text-[#9297a3] hover:text-white"}`}
                key={scene.id}
                onClick={() => scrollToScene(index)}
                type="button"
              >
                <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-200 group-hover:max-w-32 group-hover:opacity-100">{scene.number}</span>
                <span className={`h-1.5 rounded-full transition-all ${active ? "w-8 bg-[#b9d5ff]" : "w-1.5 bg-white/35"}`} />
              </button>
            );
          })}
        </nav>
      </div>

      <div className={`relative z-10 ${reducedMotion ? "" : "lg:-mt-[100svh]"}`}>
        {specificationScenes.map((scene, index) => (
          <article
            aria-current={index === activeSceneIndex ? "step" : undefined}
            className="pointer-events-none flex min-h-[78svh] items-end px-5 pb-10 pt-8 sm:px-8 sm:pb-14 lg:min-h-svh lg:items-center lg:px-10 lg:py-20"
            id={`specification-scene-${scene.id}`}
            key={scene.id}
            ref={(element) => {
              sceneRefs.current[index] = element;
            }}
          >
            <div className="mx-auto w-full max-w-[1360px]">
              <ScenePanel activeIndex={activeSceneIndex} animated={isDesktop && !reducedMotion} onExplore={() => scrollToScene(1)} onReturnHome={() => scrollToScene(0)} sceneIndex={index} />
            </div>
          </article>
        ))}
      </div>

      <div className="relative z-10 border-t border-white/10 px-5 py-7 sm:px-8 lg:px-10">
        <p className="mx-auto max-w-[1360px] text-[11px] leading-5 text-[#9297a3]">All displayed technical entries retain their original HYOSUNG Service Manual page reference. The procedural motorcycle remains an approximate visual aid, not a CAD drawing or service procedure.</p>
      </div>
    </section>
  );
}
