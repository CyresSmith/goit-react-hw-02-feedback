import Box from './Box';
import FeedbackWidget from './FeedbackWidget';

export const App = () => {
  return (
    <Box variant="container">
      <Box variant="section" as="section" justifyContent="space-between">
        <FeedbackWidget />
      </Box>
    </Box>
  );
};
