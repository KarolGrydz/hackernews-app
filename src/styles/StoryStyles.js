import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 15px;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const StoryTitle = styled.h1`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #2e2e2c;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const StoryMeta = styled.div`
  font-style: italic;

  > span:first-child {
    margin-right: 10px;
  }

  > span:not(:first-child):before {
    content: '*';
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`;

export const StoryMetaElement = styled.span`
  font-weight: bold;
  color: ${props => props.color || 'red'};
`;
