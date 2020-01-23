import styled from 'styled-components';

export const StoryWrapper = styled.section`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #cccccc;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 80% 20%;

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  img {
    margin: 15px auto 10px auto;
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
  margin-top: 10px;
  font-size: 0.85rem;

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

export const StoryButton = styled.button`
  color: #3c4043;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.16), 0 1px 2px 0 rgba(0, 0, 0, 0.26);
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  height: 25px;
  width: 100px;
  border-radius: 15px;
  border: 1px solid #3c4043;

  &:hover {
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.36);
  }

  > svg {
    margin-right: 5px;
  }
`;
