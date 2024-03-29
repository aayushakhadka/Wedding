import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../common/Loading";

const ApiDataContext = createContext(null);

export function useApiData() {
  return useContext(ApiDataContext);
}

export function ApiDataProvider({ children }) {
  const [apiData, setApiData] = useState([]);

  const { eventId } = useParams();

  console.log(eventId, "eventID");

  useEffect(() => {
    if (eventId) {
      axios
        .get(
          `${process.env.REACT_APP_BASE_URL}/event/detail/${eventId}?populate=backgrounds&populate=days.image&populate=memories.images&populate=memories.guest&populate=memories.day&populate=closeFriends.image`
        )
        .then((response) => {
          setApiData({ ...response.data, eventId });
        })
        .catch((error) => {
          console.log("error");
        });
    }
  }, [eventId]);

  if (!apiData || apiData.length == 0) {
    return <Loading />;
  }

  return (
    <ApiDataContext.Provider value={apiData}>
      {children}
    </ApiDataContext.Provider>
  );
}
