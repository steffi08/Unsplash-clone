import { useState } from "react";
import { useDispatch } from "react-redux";
import { useObserver } from "mobx-react";
import { setPostList } from "../../stores/Posts/postSlice";

const usePostSave = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const setPostsList = (query) => {
    setError(null);
    try {
      fetch(
        `https://api.unsplash.com/search/photos?client_id=Oe1MWtQpW8iDr1gqMv0v6YuEl3dkWPKpUFLJ-6DRcOk&query=${query}`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(setPostList(data.results));
        });
    } catch (error) {
      console.log(`An Error Occurred: ${error.message}`);
      setError(error.message);
    }
  };

  return useObserver(() => ({
    error: error,
    setPostsList: setPostsList,
  }));
};

export default usePostSave;
