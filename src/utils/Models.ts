export type DraggableEventHandler = (
  e: MouseEvent,
  data: DraggableData
) => void | false;

export type DraggableData = {
  node: HTMLElement;
  x: number;
  y: number;
  deltaX: number;
  deltaY: number;
  lastX: number;
  lastY: number;
};

export type Coordinates = {
  x: number;
  y: number;
};

export type Person = {
  name: string;
  username: string;
};

export type Size = {
  height: number;
  width: number;
};

export type Thing = {
  coordinates: Coordinates;
  position: string;
  id: number;
  type: string;
  person: Person;
  // angle: number;
};
