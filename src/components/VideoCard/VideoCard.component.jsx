import React from 'react';
import { Card, CardTitle, CardThumbnail, CardDescription } from './VideoCard.styled';

import { formatDate } from '../../utils/date';

function VideoCard({ video }) {
  return (
    <Card>
      <CardThumbnail src={video.snippet.thumbnails.medium.url} />
      <CardTitle>{video.snippet.title}</CardTitle>
      <CardDescription>
        {video.snippet.channelTitle} | {formatDate(video.snippet.publishedAt)}
      </CardDescription>
    </Card>
  );
}

export default VideoCard;
