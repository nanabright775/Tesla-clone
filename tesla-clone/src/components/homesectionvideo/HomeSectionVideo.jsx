import './HomeSectionVideo.css';
import teslavid from '../../assets/teslvid.mp4';
export default function HomeSectionVideo() {
  return (
    <div>
      <video className="video-background" autoPlay muted loop>
        <source src={teslavid} type="video/mp4" />
      </video>
      <div className="overlay">
        <div id='exp'>
          <h1>Experience Tesla</h1>
          <h5>Schedule a Demo Drive Today</h5>
        </div>
        <div>
          <button>Demo Drive</button>
        </div>
      </div>
    </div>
  );
}
