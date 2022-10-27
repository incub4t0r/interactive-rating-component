import './App.css';

import { useState } from 'react';
import PostSubmit from './components/postsubmit.jsx';
import PreSubmit from './components/presubmit.jsx';


export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rateCount, setRateCount] = useState(0);
  return (
    <>{submitted ? <PostSubmit rating={rateCount}/> : <PreSubmit setRateCount={setRateCount} setSubmitted={setSubmitted}/>}</>
  );
}
