import styled from 'styled-components';

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  :hover {
    transform: scale(1.01);
  }
`;

export const CardBody = styled.div`
  padding: 0.5rem 1rem;
`;

export const CardThumbnail = styled.img`
  max-height: 158px;
  object-fit: cover;
  display: inline-block;
`;

export const CardTitle = styled.h3`
  color: #111827;
  font-size: 1rem;
`;

export const CardDescription = styled.p`
  color: #6b7280;
  font-size: 0.9rem;
`;
