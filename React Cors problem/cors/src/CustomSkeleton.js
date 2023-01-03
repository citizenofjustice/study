import React from "react";

const CustomSkeleton = ({ type }) => {
  const classes = `skeleton ${type}`;

  return <div className={classes}></div>;
};
export default CustomSkeleton;
