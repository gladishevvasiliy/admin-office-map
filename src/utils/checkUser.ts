import { isNil } from "lodash";
export default (userId, things) => {
  if (isNil(things.find(thing => thing.userId === userId)) && !isNil(userId))
    return true;
  return false;
};
