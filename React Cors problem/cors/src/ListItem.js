import ItemContent from "./ItemContent";
import Controls from "./Controls";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SkeletonTask from "./SkeletonTask";
import "./skeleton.css";
const ListItem = (props) => {
  const data = props.item;
  return (
    <>
      {props.load && <SkeletonTask />}
      {!props.load && (
        <li>
          <div>{data.index}</div>
          <div>{data.title}</div>
          <div>{data.description}</div>
          <Controls></Controls>
        </li>
      )}
    </>
  );
};
export default ListItem;
