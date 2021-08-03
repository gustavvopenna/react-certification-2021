import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import { ThumbUpIcon, ThumbDownIcon, ShareIcon } from '@heroicons/react/outline';
import VideoCard from '../../components/VideoCard';

import youtubeService from '../../api/youtube';
import { formatDate } from '../../utils/date';

// TODO: split into individual components
// TODO: Make custom hook for managing fetching, error and data states on API calls
// TODO: Create component for errors handle

function Detail() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState(null);

  const getVideoById = async (videoId) => {
    if (!videoId) return;
    try {
      const { data } = await youtubeService.get('/videos', {
        params: {
          id: videoId,
          part: 'snippet,player, contentDetails, statistics',
        },
      });

      setVideo(data.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getRelatedVideosByVideoId = async (videoId) => {
    try {
      const { data } = await youtubeService.get('/search', {
        params: {
          part: 'snippet',
          relatedToVideoId: videoId,
          type: 'video',
        },
      });
      setRelatedVideos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideoById(id);
    getRelatedVideosByVideoId(id);
  }, [id]);

  if (!video) {
    return <div>Cargando...</div>;
  }

  return (
    <DetailsContainer>
      <DetailsMain>
        <VideoContainer dangerouslySetInnerHTML={{ __html: video.player.embedHtml }} />
        <Title>{video.snippet.title}</Title>
        <Statistics>
          <Views>{video.statistics.viewCount} views</Views>
          <StatisticsRight>
            <Button>
              <ThumbUpIconStyled />
              <ButtonText>{video.statistics.likeCount}</ButtonText>
            </Button>
            <Button>
              <ThumbDownIconStyled />
              <ButtonText>{video.statistics.dislikeCount}</ButtonText>
            </Button>
            <Button>
              <ShareIconStyled />
              <ButtonText>Share</ButtonText>
            </Button>
          </StatisticsRight>
        </Statistics>
        <Divider />
        <DescriptionContainer>
          <Channel>{video.snippet.channelTitle}</Channel>
          <PublishedOn>Published on {formatDate(video.snippet.publishedAt)}</PublishedOn>
          <Description>{video.snippet.description}</Description>
        </DescriptionContainer>
      </DetailsMain>
      <RelatedVideos>
        {relatedVideos &&
          relatedVideos.items.map((v) => (
            <VideoCard
              key={v.etag}
              id={v.id.videoId}
              title={v.snippet.title}
              thumbnail={v.snippet.thumbnails.medium.url}
              channelTitle={v.snippet.channelTitle}
              publishedAt={v.snippet.publishedAt}
            />
          ))}
      </RelatedVideos>
    </DetailsContainer>
  );
}

export default Detail;

const DetailsContainer = styled.div`
  margin: 0 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 768px) {
    margin: 0;
    grid-template-columns: 1fr;
  }
`;

const DetailsMain = styled.div``;

const RelatedVideos = styled.div`
  display: flex;
  flex-direction: column;

  & article {
    margin-bottom: 16px;
  }
`;

const VideoContainer = styled.div`
  width: fit-content;
  height: 270px;
  border-radius: 14px;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 22px;
  color: #192646;
  font-weight: 700;
`;

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Views = styled.div`
  font-size: 14px;
  color: #c2c2c2;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  padding: 10px 20px;
  background-color: rgba(235, 235, 235, 0.3);
  border-radius: 20px;
  color: #192646;
  cursor: pointer;
`;

const StatisticsRight = styled.div`
  display: flex;

  ${Button} {
    margin-left: 10px;
  }
`;

const ButtonText = styled.span`
  margin-left: 0.25rem;
`;

const ThumbUpIconStyled = styled(ThumbUpIcon)`
  width: 1rem;
  color: rgba(0, 0, 0, 0.24);
`;

const ThumbDownIconStyled = styled(ThumbDownIcon)`
  width: 1rem;
  color: rgba(0, 0, 0, 0.24);
`;

const ShareIconStyled = styled(ShareIcon)`
  width: 1rem;
  color: rgba(0, 0, 0, 0.24);
`;

const Divider = styled.div`
  margin: 1rem auto;
  width: 98%;
  height: 1px;
  background-color: rgba(216, 216, 216, 0.5);
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Channel = styled.h3`
  font-size: 18px;
  color: #192646;
  font-weight: 700;
`;

const PublishedOn = styled.p`
  color: #c2c2c2;
  font-size: 13px;
`;

const Description = styled.p`
  color: rgba(0, 0, 0, 0.6);
`;
