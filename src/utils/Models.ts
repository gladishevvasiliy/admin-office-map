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

export type Position = {
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
  position: Position;
  id: number;
  type: string;
  size: Size;
  person: Person;
  // angle: number;
};
