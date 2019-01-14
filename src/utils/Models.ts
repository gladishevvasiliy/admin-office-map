export interface CoordinatesOnMap {
  x: number;
  y: number;
}

export type Person = {
  name: string;
  username: string;
};

export type UserToSelect = {
  label: string;
  value: string | null;
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
  showModalEditTable: Function;
};

export type ThingType = {
  id: number;
  type: string;
  coordinates: CoordinatesOnMap;
  position: "horizontal" | "vertical" | "both" | undefined;
  userId: string;
};

export type User = {
  id: string;
  userId: string;
  title: string;
  about: string;
  capability: string;
  phone: string;
  level: number;
  category: string;
  startdate: string;
};

// export type Level = {
//   id: string;
//   sortId: number;
//   title: string;
//   map: string;
//   minimap: string;
//   users: never[] | Array<User>;
//   static?: Array<Object> | undefined;
//   show?: undefined | string;
//   things?: Array<ThingType> | undefined;
//   permanent?: PermanentType | undefined;
// };

type Room = {
  id: string;
  title: string;
  coordinates: CoordinatesOnMap;
  width: number;
  height: number;
};

export type IPermanent = {
  columns: Array<CoordinatesOnMap>;
  officeBorder: {
    heightSvg: number;
    widthSvg: number;
    pointsForPolygon: string;
  };
  rooms: Array<Room>;
};

export type Level = {
  id: string;
  sortId: number;
  title: string;
  show?: string;
  map: string;
  minimap: string;
  static?: Array<Object>;
  users: Array<User>;
  things?: Array<ThingType>;
  permanent?: IPermanent | undefined;
};

export type reduxState = {
  levelData: Level;
  permanent: IPermanent;
  users: Array<User>;
};
export default null; // ts ругался, что нет default export
