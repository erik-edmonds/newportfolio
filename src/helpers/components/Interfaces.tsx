import type { Coord } from "@/helpers/components/Types";

export interface EarthProps {
  coords: Coord[];
}

export interface MarkerProps {
  coord: EarthProps['coords'][number];
  radius: number;
}
