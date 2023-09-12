import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const userLearningData = [
  {
    date: '2023-09-01',
    hoursLearned: 2.5,
  },
  {
    date: '2023-09-02',
    hoursLearned: 1.8,
  },
  {
    date: '2023-09-03',
    hoursLearned: 3.2,
  },
  {
    date: '2023-09-04',
    hoursLearned: 2.9,
  },
  {
    date: '2023-09-05',
    hoursLearned: 1.5,
  },
  {
    date: '2023-09-06',
    hoursLearned: 2.7,
  },
  {
    date: '2023-09-07',
    hoursLearned: 3.5,
  },
];

const YourStatistics = () => {
  return (
    <div className='mt-10' style={{ width: '100%', height: '400px' }}>
      <h2 className='my-4 font-Lexend font-bold'>Daily Hours Learned</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={userLearningData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="hoursLearned" stroke="#8884d8" strokeWidth={2} name="Hours Learned" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YourStatistics;
