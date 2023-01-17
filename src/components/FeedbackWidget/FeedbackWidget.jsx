import Box from 'components/Box';
import Button from 'components/Button';
import { Component } from 'react';
import { Title, SubTitle, List, Item, Icon } from './FeedbackWidget.styled';
import { FaThumbsUp, FaThumbsDown, FaMeh } from 'react-icons/fa';

class FeedbackWidget extends Component {
  render() {
    return (
      <Box
        variant="widget"
        width={350}
        backgroundColor="muted"
        ml="auto"
        mr="auto"
      >
        <Title>Please Leave Feedback</Title>

        <Box display="flex" justifyContent="space-between">
          <Button icon={FaThumbsUp}>Good</Button>
          <Button icon={FaMeh}>Neutral</Button>
          <Button icon={FaThumbsDown}>Bad</Button>
        </Box>
        <SubTitle>Statistic</SubTitle>
        <List>
          <Item>Good: 10</Item>
          <Item>Neutral: 10</Item>
          <Item>Bad: 10</Item>
        </List>
      </Box>
    );
  }
}

export default FeedbackWidget;
