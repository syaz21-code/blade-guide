import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { useMemo, useRef, type ReactNode } from "react";
import * as THREE from "three";

import {
  blade250ComponentById,
  type MotorcycleComponentId,
} from "@/content/three/motorcycle-components";

type Blade250ModelProps = {
  selectedId: MotorcycleComponentId | null;
  highlightedIds?: readonly MotorcycleComponentId[];
  exploded: boolean;
  isolated: boolean;
  onSelect: (id: MotorcycleComponentId) => void;
};

type SelectableAssemblyProps = {
  id: MotorcycleComponentId;
  anchor: [number, number, number];
  selectedId: MotorcycleComponentId | null;
  highlightedIds: readonly MotorcycleComponentId[];
  exploded: boolean;
  isolated: boolean;
  onSelect: (id: MotorcycleComponentId) => void;
  children: (selected: boolean) => ReactNode;
};

type TubeProps = {
  start: [number, number, number];
  end: [number, number, number];
  radius?: number;
  color: string;
  metalness?: number;
  roughness?: number;
};

const noOffset = new THREE.Vector3();
const highlightColor = "#9cc6ff";
const highlightSoftColor = "#dcecff";

function Tube({ start, end, radius = 0.055, color, metalness = 0.55, roughness = 0.35 }: TubeProps) {
  const startVector = new THREE.Vector3(...start);
  const endVector = new THREE.Vector3(...end);
  const direction = endVector.clone().sub(startVector);
  const midpoint = startVector.clone().add(endVector).multiplyScalar(0.5);
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());

  return (
    <mesh position={midpoint} quaternion={quaternion} castShadow receiveShadow>
      <cylinderGeometry args={[radius, radius, direction.length(), 10]} />
      <meshStandardMaterial color={color} metalness={metalness} roughness={roughness} />
    </mesh>
  );
}

function SelectionHalo({ anchor, color }: { anchor: [number, number, number]; color: string }) {
  return (
    <group position={anchor}>
      <mesh>
        <sphereGeometry args={[0.42, 20, 16]} />
        <meshBasicMaterial color={color} depthWrite={false} opacity={0.14} transparent />
      </mesh>
      <pointLight color={color} distance={2.2} intensity={2.6} />
    </group>
  );
}

function SelectableAssembly({
  id,
  anchor,
  selectedId,
  highlightedIds,
  exploded,
  isolated,
  onSelect,
  children,
}: SelectableAssemblyProps) {
  const group = useRef<THREE.Group>(null);
  const selected = selectedId === id;
  const highlighted = selected || highlightedIds.includes(id);
  const component = blade250ComponentById[id];
  const explodedTarget = useMemo(() => new THREE.Vector3(...component.explodedOffset), [component]);

  useFrame((_, delta) => {
    if (!group.current) {
      return;
    }

    const target = exploded ? explodedTarget : noOffset;
    const amount = 1 - Math.exp(-delta * 5.5);
    group.current.position.lerp(target, amount);
  });

  const handleSelect = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onSelect(id);
  };

  return (
    <group onClick={handleSelect} ref={group} visible={!isolated || selected}>
      {children(highlighted)}
      {highlighted ? <SelectionHalo anchor={anchor} color={highlightColor} /> : null}
    </group>
  );
}

function Wheel({ x, active }: { x: number; active: boolean }) {
  const glow = active ? highlightColor : "#b9bdc5";

  return (
    <group position={[x, 0.57, 0]}>
      <mesh castShadow receiveShadow>
        <torusGeometry args={[0.46, 0.1, 12, 30]} />
        <meshStandardMaterial color="#111215" metalness={0.1} roughness={0.78} />
      </mesh>
      <mesh castShadow receiveShadow>
        <torusGeometry args={[0.34, 0.042, 10, 30]} />
        <meshStandardMaterial color={glow} metalness={0.85} roughness={0.22} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} castShadow>
        <cylinderGeometry args={[0.095, 0.095, 0.19, 16]} />
        <meshStandardMaterial color="#22252c" metalness={0.8} roughness={0.3} />
      </mesh>
      {Array.from({ length: 8 }, (_, index) => (
        <mesh key={index} rotation={[0, 0, (Math.PI / 4) * index]}>
          <boxGeometry args={[0.52, 0.018, 0.025]} />
          <meshStandardMaterial color="#6e737c" metalness={0.82} roughness={0.24} />
        </mesh>
      ))}
    </group>
  );
}

function Brake({ x, active, rear = false }: { x: number; active: boolean; rear?: boolean }) {
  const glow = active ? highlightColor : "#9298a2";

  return (
    <group position={[x, 0.57, 0.115]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[rear ? 0.26 : 0.3, rear ? 0.26 : 0.3, 0.025, 28]} />
        <meshStandardMaterial color={glow} metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.2, 0.08, 0.02]} rotation={[0, 0, -0.28]} castShadow>
        <boxGeometry args={[0.15, 0.13, 0.11]} />
        <meshStandardMaterial color={active ? highlightColor : "#252831"} metalness={0.52} roughness={0.4} />
      </mesh>
    </group>
  );
}

function StaticChassis({ active }: { active: boolean }) {
  const frameColor = active ? "#93b6dc" : "#444953";
  const bodyColor = active ? "#5b7795" : "#16171a";

  return (
    <group>
      <Tube color={frameColor} radius={0.055} start={[-1.33, 0.65, 0]} end={[-0.55, 1.42, 0]} />
      <Tube color={frameColor} radius={0.055} start={[-0.55, 1.42, 0]} end={[0.88, 1.72, 0]} />
      <Tube color={frameColor} radius={0.055} start={[-0.55, 1.42, 0]} end={[0.12, 0.78, 0]} />
      <Tube color={frameColor} radius={0.055} start={[0.12, 0.78, 0]} end={[0.88, 1.72, 0]} />
      <Tube color={frameColor} radius={0.055} start={[-1.35, 0.62, -0.12]} end={[-0.46, 1.37, -0.22]} />
      <Tube color={frameColor} radius={0.055} start={[-1.35, 0.62, 0.12]} end={[-0.46, 1.37, 0.22]} />
      <mesh position={[-0.82, 1.61, 0]} rotation={[0, 0, -0.04]} castShadow>
        <boxGeometry args={[1.25, 0.2, 0.58]} />
        <meshStandardMaterial color={bodyColor} roughness={0.75} />
      </mesh>
      <mesh position={[-1.42, 1.54, 0]} rotation={[0, 0, -0.14]} castShadow>
        <boxGeometry args={[0.45, 0.14, 0.53]} />
        <meshStandardMaterial color={active ? "#6889a8" : "#1d1f23"} roughness={0.72} />
      </mesh>
      <mesh position={[-1.76, 1.35, 0]} castShadow>
        <boxGeometry args={[0.1, 0.1, 0.48]} />
        <meshStandardMaterial color="#e9e6dc" metalness={0.45} roughness={0.35} />
      </mesh>
      <mesh position={[1.6, 1.7, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <cylinderGeometry args={[0.23, 0.23, 0.12, 20]} />
        <meshStandardMaterial color="#d8e1e6" emissive="#5a6870" emissiveIntensity={0.3} metalness={0.5} roughness={0.22} />
      </mesh>
      <mesh position={[1.72, 1.7, 0]} rotation={[0, Math.PI / 2, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.125, 18]} />
        <meshStandardMaterial color="#eef6fa" emissive="#bddfe8" emissiveIntensity={0.5} roughness={0.16} />
      </mesh>
      <mesh position={[-1.82, 1.42, 0]} castShadow>
        <boxGeometry args={[0.14, 0.12, 0.58]} />
        <meshStandardMaterial color="#b81d22" emissive="#4e0202" emissiveIntensity={0.6} roughness={0.38} />
      </mesh>
      <Tube color="#50555f" radius={0.042} start={[-1.35, 0.66, 0.1]} end={[1.35, 0.57, 0.1]} />
    </group>
  );
}

export function Blade250Model({ selectedId, highlightedIds = [], exploded, isolated, onSelect }: Blade250ModelProps) {
  return (
    <group>
      <SelectableAssembly anchor={[-0.18, 1.28, 0]} exploded={exploded} highlightedIds={highlightedIds} id="frame" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => <StaticChassis active={active} />}
      </SelectableAssembly>

      <SelectableAssembly anchor={[-0.05, 1.02, 0]} exploded={exploded} highlightedIds={highlightedIds} id="engine" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => (
          <group>
            <mesh position={[-0.05, 0.98, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.46, 0.5, 0.5, 8]} />
              <meshStandardMaterial color={active ? highlightColor : "#2a2c31"} metalness={0.72} roughness={0.28} />
            </mesh>
            <mesh position={[-0.28, 1.32, 0]} rotation={[0, 0, 0.72]} castShadow>
              <cylinderGeometry args={[0.17, 0.17, 0.6, 10]} />
              <meshStandardMaterial color={active ? highlightColor : "#535760"} metalness={0.68} roughness={0.3} />
            </mesh>
            <mesh position={[0.27, 1.27, 0]} rotation={[0, 0, -0.68]} castShadow>
              <cylinderGeometry args={[0.17, 0.17, 0.58, 10]} />
              <meshStandardMaterial color={active ? highlightColor : "#535760"} metalness={0.68} roughness={0.3} />
            </mesh>
            <mesh position={[-0.05, 0.95, 0.38]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.24, 0.24, 0.08, 20]} />
              <meshStandardMaterial color={active ? highlightSoftColor : "#89909c"} metalness={0.78} roughness={0.25} />
            </mesh>
          </group>
        )}
      </SelectableAssembly>

      <SelectableAssembly anchor={[1.4, 0.58, 0]} exploded={exploded} highlightedIds={highlightedIds} id="front-wheel" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => <Wheel active={active} x={1.4} />}
      </SelectableAssembly>

      <SelectableAssembly anchor={[-1.4, 0.58, 0]} exploded={exploded} highlightedIds={highlightedIds} id="rear-wheel" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => <Wheel active={active} x={-1.4} />}
      </SelectableAssembly>

      <SelectableAssembly anchor={[1.4, 0.58, 0.14]} exploded={exploded} highlightedIds={highlightedIds} id="front-brake" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => <Brake active={active} x={1.4} />}
      </SelectableAssembly>

      <SelectableAssembly anchor={[-1.4, 0.58, 0.14]} exploded={exploded} highlightedIds={highlightedIds} id="rear-brake" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => <Brake active={active} rear x={-1.4} />}
      </SelectableAssembly>

      <SelectableAssembly anchor={[1.02, 1.98, 0]} exploded={exploded} highlightedIds={highlightedIds} id="handlebar" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => (
          <group>
            <Tube color={active ? highlightColor : "#9098a4"} radius={0.038} start={[0.87, 1.9, -0.56]} end={[1.03, 2.03, 0.54]} />
            <Tube color={active ? highlightColor : "#9098a4"} radius={0.038} start={[0.98, 2.02, -0.55]} end={[1.14, 2.16, -0.84]} />
            <Tube color={active ? highlightColor : "#9098a4"} radius={0.038} start={[0.98, 2.02, 0.55]} end={[1.14, 2.16, 0.84]} />
            <mesh position={[1.05, 2.08, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
              <cylinderGeometry args={[0.16, 0.13, 0.08, 16]} />
              <meshStandardMaterial color={active ? highlightColor : "#171a20"} metalness={0.7} roughness={0.28} />
            </mesh>
            <mesh position={[1.11, 2.16, -0.85]} rotation={[0, Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.055, 0.055, 0.18, 12]} />
              <meshStandardMaterial color="#18191c" roughness={0.72} />
            </mesh>
            <mesh position={[1.11, 2.16, 0.85]} rotation={[0, Math.PI / 2, 0]}>
              <cylinderGeometry args={[0.055, 0.055, 0.18, 12]} />
              <meshStandardMaterial color="#18191c" roughness={0.72} />
            </mesh>
          </group>
        )}
      </SelectableAssembly>

      <SelectableAssembly anchor={[0.08, 1.72, 0]} exploded={exploded} highlightedIds={highlightedIds} id="fuel-tank" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => (
          <group>
            <mesh position={[0.07, 1.7, 0]} rotation={[0, 0, -0.12]} scale={[0.88, 0.38, 0.45]} castShadow receiveShadow>
              <sphereGeometry args={[1, 24, 18]} />
              <meshStandardMaterial color={active ? highlightColor : "#2b3541"} metalness={0.48} roughness={0.22} />
            </mesh>
            <mesh position={[0.3, 1.93, 0]} castShadow>
              <cylinderGeometry args={[0.075, 0.075, 0.03, 16]} />
              <meshStandardMaterial color={active ? highlightSoftColor : "#c2c6ca"} metalness={0.86} roughness={0.22} />
            </mesh>
          </group>
        )}
      </SelectableAssembly>

      <SelectableAssembly anchor={[-0.62, 0.84, 0.34]} exploded={exploded} highlightedIds={highlightedIds} id="exhaust" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => (
          <group>
            <Tube color={active ? highlightColor : "#858b94"} radius={0.07} start={[0.08, 0.97, 0.32]} end={[-0.54, 0.75, 0.45]} />
            <Tube color={active ? highlightColor : "#858b94"} radius={0.07} start={[-0.54, 0.75, 0.45]} end={[-1.5, 0.78, 0.46]} />
            <Tube color={active ? highlightColor : "#646a73"} radius={0.11} start={[-1.5, 0.78, 0.46]} end={[-1.86, 0.83, 0.46]} />
            <Tube color={active ? highlightColor : "#858b94"} radius={0.055} start={[-0.1, 1.1, -0.31]} end={[-0.72, 0.92, -0.45]} />
            <Tube color={active ? highlightColor : "#858b94"} radius={0.055} start={[-0.72, 0.92, -0.45]} end={[-1.45, 0.96, -0.45]} />
          </group>
        )}
      </SelectableAssembly>

      <SelectableAssembly anchor={[1.18, 1.22, 0]} exploded={exploded} highlightedIds={highlightedIds} id="front-suspension" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => (
          <group>
            <Tube color={active ? highlightColor : "#c5a264"} radius={0.062} start={[1.25, 1.87, -0.24]} end={[1.4, 0.63, -0.24]} />
            <Tube color={active ? highlightColor : "#c5a264"} radius={0.062} start={[1.25, 1.87, 0.24]} end={[1.4, 0.63, 0.24]} />
            <Tube color="#555b65" radius={0.085} start={[1.31, 1.39, -0.24]} end={[1.4, 0.63, -0.24]} />
            <Tube color="#555b65" radius={0.085} start={[1.31, 1.39, 0.24]} end={[1.4, 0.63, 0.24]} />
            <Tube color={active ? highlightColor : "#727983"} radius={0.052} start={[1.18, 1.88, -0.28]} end={[1.18, 1.88, 0.28]} />
          </group>
        )}
      </SelectableAssembly>

      <SelectableAssembly anchor={[-0.82, 1.02, 0]} exploded={exploded} highlightedIds={highlightedIds} id="rear-suspension" isolated={isolated} onSelect={onSelect} selectedId={selectedId}>
        {(active) => (
          <group>
            <Tube color={active ? highlightColor : "#c6ccd4"} radius={0.09} start={[-0.65, 1.4, -0.18]} end={[-1.08, 0.77, -0.18]} />
            {Array.from({ length: 5 }, (_, index) => (
              <mesh key={index} position={[-0.73 - index * 0.085, 1.28 - index * 0.125, -0.18]} rotation={[0.86, 0, 0.5]}>
                <torusGeometry args={[0.105, 0.018, 8, 14]} />
                <meshStandardMaterial color={active ? highlightColor : "#9aa1ab"} metalness={0.78} roughness={0.27} />
              </mesh>
            ))}
            <Tube color="#414751" radius={0.065} start={[-0.65, 0.82, -0.12]} end={[-1.4, 0.6, -0.12]} />
          </group>
        )}
      </SelectableAssembly>
    </group>
  );
}
