import React from "react";

function YoutubeInstance({ width, height }) {
  return (
    <iframe
      title="youtube"
      width={"100%"}
      height={"100%"}
      src={`https://www.youtube.com/embed/21X5lGlDOfg`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export default YoutubeInstance;
