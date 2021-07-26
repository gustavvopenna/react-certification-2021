import React from 'react';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';

import videos from '../../mocks/videos';

function HomePage() {
  return (
    <VideosWrapper>
      {videos.items.map((video) => (
        <VideoCard video={video} />
      ))}
    </VideosWrapper>
  );
}

export default HomePage;

const VideosWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;
`;
