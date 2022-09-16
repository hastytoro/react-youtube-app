import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: { q: term },
    });
    const { items } = response.data;
    setVideos(items);
  };

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  return [videos, search];
};

export default useVideos;
