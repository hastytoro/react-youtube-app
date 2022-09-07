import axios from "axios";

const KEY_1 = "AIzaSyB4Owu3sq9JZS2YX0EZVBafb6-FHDXBjyM";
const KEY_2 = "AIzaSyDQKvdbkXwGPePsPVFyjHcL9EMvHsdofhc";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY_1,
  },
});
