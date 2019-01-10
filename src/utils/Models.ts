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

export type ThingProps = {
  position: "horizontal" | "vertical" | "both" | undefined;
  id: number;
  type: string;
  userId: string;
  rotateThing: Function;
  removeThing: Function;
};

export type Thing = {
  id: number;
  type: string;
  coordinates: Coordinates;
  position: "horizontal" | "vertical" | "both" | undefined;
  userId: string;
};

export type reduxState = {
  things: Array<Thing>;
  users: Array<Object>;
};
