import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';

import youtubeService from '../../api/youtube';
import useDebounce from '../../hooks/useDebounce';

const DEFAULT_SEARCH = 'mexico vs holanda 2014';

function HomePage({ searchTerm }) {
  const [videos, setVideos] = useState([]);

  const getVideosBySearchTerm = async (term = DEFAULT_SEARCH) => {
    if (!term) return;
    const { data } = await youtubeService.get('/search', {
      params: {
        q: term,
        part: 'snippet',
      },
    });

    setVideos(data.items);
  };

  useEffect(() => {
    getVideosBySearchTerm();
  }, []);

  useDebounce(() => getVideosBySearchTerm(searchTerm), [searchTerm], 1000);

  return (
    <VideosWrapper>
      {videos.length === 0 ? (
        <div>Cargando...</div>
      ) : (
        videos.map((video) => (
          <VideoCard
            key={video.etag}
            id={video.id.videoId}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.medium.url}
            channelTitle={video.snippet.channelTitle}
            publishedAt={video.snippet.publishedAt}
          />
        ))
      )}
    </VideosWrapper>
  );
}

export default HomePage;

const VideosWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 12px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
