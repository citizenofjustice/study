import CustomSkeleton from "./CustomSkeleton";

const SkeletonTask = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-task">
        <CustomSkeleton type={"title"} />
        <CustomSkeleton type={"text"} />
        <CustomSkeleton type={"text"} />
      </div>
    </div>
  );
};

export default SkeletonTask;
