import React from 'react';

import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardThumbnail,
  CardDescription,
} from './VideoCard.styled';

import { formatDate } from '../../utils/date';

function VideoCard({ title, thumbnail, channelTitle, publishedAt, id }) {
  return (
    <Link to={{ pathname: `/detail/${id}` }}>
      <Card>
        <CardThumbnail src={thumbnail} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {channelTitle} | {formatDate(publishedAt)}
          </CardDescription>
        </CardBody>
      </Card>
    </Link>
  );
}

export default VideoCard;
