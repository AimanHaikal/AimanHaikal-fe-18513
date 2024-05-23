// pages/index.tsx
import { Box, Heading } from '@chakra-ui/react';
import { AssessmentProvider } from './context/assessmentContext';
import AssessmentForm from './components/assessmentForm';

const Home = () => {
  return (
    <AssessmentProvider> {/* Wrap your components with the AssessmentProvider */}
      <Box>
        <Heading as="h1" size="xl">Web Assessment</Heading>
        <AssessmentForm />
      </Box>
    </AssessmentProvider>
  );
};

export default Home;
