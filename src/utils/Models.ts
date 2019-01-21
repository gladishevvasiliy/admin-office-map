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
  id?: string;
  userId?: string;
  title?: string;
  about?: string;
  capability?: string;
  phone?: string;
  level?: number;
  category?: string;
  startdate?: string;
};

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
  id?: string;
  sortId?: number;
  title?: string;
  show?: string;
  map: string;
  minimap?: string;
  static?: Array<Object>;
  users?: Array<User>;
  things?: Array<ThingType>;
  permanent?: IPermanent | undefined;
};

export type reduxState = {
  levelData: {
    levels: Array<Level>;
    currentOfficeNum: number;
  };
  permanent: IPermanent;
  users: Array<User>;
};
export default null; // ts ругался, что нет default export

export interface IlevelReducer {
  currentOfficeNum: number;
  levels: {
    id: string;
    sortId: number;
    title: string;
    show: string;
    map: string;
    minimap: string;
    static: {
      id: string;
      isPlace: boolean;
      category: string;
      title: string;
      about: string;
      fullInfo: string;
    }[];
    things: {
      userId: null;
      type: string;
      coordinates: CoordinatesOnMap;
      position: string;
      id: number;
    }[];
    permanent: IPermanent[];
  };
}

export interface LOL {
  levels: {
    id: string;
    sortId: number;
    title: string;
    show: string;
    map: string;
    minimap: string;
    static: {
      id: string;
      isPlace: boolean;
      category: string;
      title: string;
      about: string;
      fullInfo: string;
    }[];
    things: {
      id: number;
      type: string;
      coordinates: CoordinatesOnMap;
      position: "vertical" | "horizontal" | "both" | undefined;
      userId: string;
    }[];
    permanent: {
      columns: { x: number; y: number }[];
      officeBorder: {
        heightSvg: number;
        widthSvg: number;
        pointsForPolygon: string;
      };
      rooms: {
        id: string;
        title: string;
        coordinates: { x: number; y: number };
        width: number;
        height: number;
      }[];
    };
  }[];
  currentOfficeNum: number;
}
