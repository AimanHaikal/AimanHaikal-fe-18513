import { useState, useEffect } from 'react';
import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import { AssessmentProvider } from './context/assessmentContext';
import AssessmentForm from './components/assessmentForm';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(''); // Explicitly type error as string
  const [data, setData] = useState<any>(null); // Change the type according to your API response

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('your-api-endpoint');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message); // Error.message is of type string
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);
  
  
   

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <AssessmentProvider>
      <Box>
        <Heading as="h1" size="xl">Web Assessment</Heading>
        <AssessmentForm data={data} />
      </Box>
    </AssessmentProvider>
  );
};

export default Home;
