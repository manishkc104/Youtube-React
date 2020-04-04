import React from "react";
import SearchBar from "./components/SearchBar";
import youtubeApi from "./api/youtubeApi";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import debounce from "lodash/debounce";
import Flex from "./components/Flex";

const App = () => {
  const INITIAL_DATA = {
    videos: [],
    selectedVideo: null
  };

  React.useEffect(() => {
    videoSearch("asim").then(data => {
      const { items: videos } = data.data;
      setVideos(video => ({
        ...video,
        videos: videos,
        selectedVideo: videos[0]
      }));
    });
  }, []);

  const API_KEY = "AIzaSyBUIJHg3bUCNPgubg69g_IHqLzQ_37LfRk";

  const [video, setVideos] = React.useState(INITIAL_DATA);

  const videoSearch = term =>
    youtubeApi.get("search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: API_KEY,
        q: term
      }
    });

  const videoDebounceSearch = debounce(term => {
    videoSearch(term).then(data => {
      const { items: videos } = data.data;
      setVideos({ ...video, videos: videos, selectedVideo: videos[0] });
    });
  }, 500);

  return (
    <React.Fragment>
      <SearchBar onSearchTermChange={term => videoDebounceSearch(term)} />
      <Flex style={{ padding: "2rem" }}>
        <VideoDetail video={video.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo =>
            setVideos({ ...video, selectedVideo: selectedVideo })
          }
          videos={video.videos}
        />
      </Flex>
    </React.Fragment>
  );
};

export default App;
