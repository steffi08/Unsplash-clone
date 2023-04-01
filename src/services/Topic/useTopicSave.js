import { useState } from "react";
import { useDispatch } from "react-redux";
import { useObserver } from "mobx-react";
import { setTopicList,setTopic } from "../../stores/Topics/topicsSlice";

const useTopicSave = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const setTopicsList = () => {
    setError(null);
    try {
      fetch(
        `https://api.unsplash.com/topics?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN}`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(setTopicList(data));
        });
    } catch (error) {
      console.log(`An Error Occurred: ${error.message}`);
      setError(error.message);
    }
  };
  const setTopicValue= (topic) => {
    setError(null);
    try {
      dispatch(setTopic(topic));
    } catch (error) {
      console.log(`An Error Occurred: ${error.message}`);
      setError(error.message);
    }
  };
  return useObserver(() => ({
    error: error,
    setTopicsList: setTopicsList,
    setTopicValue:setTopicValue,
  }));
};

export default useTopicSave;
