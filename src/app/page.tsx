import AssessmentForm from './components/assessmentForm';

const Home = () => {
  return (
    <div>
      <h1>Web Assessment</h1>
      <AssessmentForm data={{}} /> {/* Pass an empty object as data prop */}
    </div>
  );
};

export default Home;
