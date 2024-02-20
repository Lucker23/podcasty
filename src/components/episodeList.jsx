import Episode from "./episode/episode.jsx"
import {episodes} from "../podcast.js"


const EpisodeList = () => {
  return (
    <div className="episodes-list">
      {episodes.map((episode) => <Episode episode={episode} key={episode.num}/>)}
    </div>
  )
};

export default EpisodeList;