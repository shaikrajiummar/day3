
// import React, { useRef } from 'react';
// import audioFile from './Audio1.mp3'; // Make sure the path is correct

// const Audio = () => {
//   const audioRef = useRef(null);

//   return (
//     <div>
//       <h1 style={{ color: 'crimson' }}>React Ref for Audio</h1>
//       <audio 
//         ref={audioRef}
//         controls
//         src={audioFile}
//       />
//     </div>
//   );
// };

// export default Audio;

import React, { useRef, useState } from 'react';
import audioFile from './Audio1.mp3';

const Audio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <h1 style={{ color: 'crimson' }}>React Ref for Audio</h1>
      <audio ref={audioRef} src={audioFile} />
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Audio;
