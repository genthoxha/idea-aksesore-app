import React from "react";

const Video = () => {
  return (
    <div className="container">
      <iframe
        src="https://www.youtube.com/embed/RPtACGAZ2so"
        loading="lazy"
        title={"Video"}
        className="iframe-map"
        width="100%"
        height="600"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default Video;
