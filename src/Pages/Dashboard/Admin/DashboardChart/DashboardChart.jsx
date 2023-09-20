import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    date: '2023-09-01',
    uv: 4000,
    user: 5,
    amt: 2400,
  },
  {
    date: '2023-09-02',
    uv: 3000,
    user: 3,
    amt: 2210,
  },
  {
    date: '2023-09-03',
    uv: 2000,
    user: 10,
    amt: 2290,
  },
  {
    date: '2023-09-04',
    uv: 2780,
    user: 15,
    amt: 2000,
  },
  {
    date: '2023-09-05',
    uv: 1890,
    user: 8,
    amt: 2181,
  },
  {
    date: '2023-09-06',
    uv: 2390,
    user: 7,
    amt: 2500,
  },
  {
    date: '2023-09-07',
    uv: 3490,
    user: 6,
    amt: 2100,
  },
];

const DashboardChart = () => {
  return (
    <div className='mt-10'
    style={{
      width: '100%',
      height: '400px',
      backgroundColor: 'white', 
    }}>
      <h2 className=' mb-10'>Daily User Registrations</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" style={{ fontSize: '12px', fill: 'black' }}  />
          <YAxis style={{ fontSize: '12px', fill: 'black' }} />
          <Tooltip contentStyle={{ fontSize: '12px', color: 'black' }}/>
          <Legend />
          <Line type="monotone" dataKey="user" stroke="black" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
