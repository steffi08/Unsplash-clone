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
        `https://api.unsplash.com/topics?client_id=Oe1MWtQpW8iDr1gqMv0v6YuEl3dkWPKpUFLJ-6DRcOk`
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
