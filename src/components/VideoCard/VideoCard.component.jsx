import React from 'react';
import styled from 'styled-components';

function VideoCard({ video }) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatDate = (date) => new Date(date).toLocaleDateString('mx-ES', options);

  return (
    <Card>
      <Thumbnail src={video.snippet.thumbnails.medium.url} />
      <Title>{video.snippet.title}</Title>
      <PublishedAt>
        {video.snippet.channelTitle} | {formatDate(video.snippet.publishedAt)}
      </PublishedAt>
    </Card>
  );
}

export default VideoCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #fff;
  border-radius: 4px;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.01);
  }
`;

const Thumbnail = styled.img`
  max-height: 158px;
  object-fit: cover;
  display: inline-block;
`;

const Title = styled.h3`
  color: #111827;
  font-size: 1rem;
`;

const PublishedAt = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
`;
