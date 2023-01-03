import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ItemContent = (props) => {
  // console.log(props.content);
  // const { index, title, description } = props.content;
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      {/* <div>{index || <Skeleton />}</div>
      <div>{title || <Skeleton />}</div>
      <div>{description || <Skeleton />}</div> */}
    </SkeletonTheme>
  );
};
export default ItemContent;
