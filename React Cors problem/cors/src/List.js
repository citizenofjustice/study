import React, { useState, useCallback, useEffect } from "react";
import ListItem from "./ListItem";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import CustomSkeleton from "./CustomSkeleton";
import "./skeleton.css";
const List = (props) => {
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataHandler = useCallback(() => {
    setIsLoading(true);
    fetch("/tasks.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Request was not successful: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        let newArr = [];
        for (const key in data) {
          newArr.push({
            index: key,
            title: data[key].title,
            description: data[key].description,
            date: data[key].date,
            hasFiles: data[key].hasFiles,
            isCompleted: data[key].isCompleted,
          });
        }
        console.log(newArr);
        setState(newArr[0]);
        setIsLoading(false);
      })
      .catch((error) => console.log("Error has occured: " + error));
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler, props.inputs]);

  return (
    <SkeletonTheme baseColor="#ffffff" highlightColor="#000000">
      <ul>
        {/* {state.map((task) => ( */}
        <ListItem load={isLoading} key={state.index} item={state}></ListItem>
        {/* ))} */}
      </ul>
    </SkeletonTheme>
  );
};
export default List;
