import styled from 'styled-components';

export const StoriesContainerWrapper = styled.main`
  max-width: 784px;
  padding: 20px 15px;
  margin: auto;
`;

export const IconTitle = styled.div`
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  text-align: center;
  padding-top: 11px;
  border-radius: 25px;
  background-color: ${props => props.backgroundColor || '#1bb3c8'};
  height: 50px;
  width: 50px;
  font-size: 1.75rem;
  margin-right: 25px;
`;

export const StoriesContainerTitle = styled.h2`
  padding-top: 11px;
  font-size: 1.75rem;
  font-weight: 500;
  font-family: 'Google Sans', sans-serif;
`;

export const AuthorMeta = styled.div`
  font-weight: bold;
  > span:first-child {
    margin-right: 10px;
  }
`;

export const AuthorMetaElement = styled.span`
  font-style: italic;
  font-weight: normal;
`;
