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

const enrollmentData = [
  {
    date: '2023-09-01',
    enrolledStudents: 10, 
  },
  {
    date: '2023-09-02',
    enrolledStudents: 15, 
  },
  {
    date: '2023-09-03',
    enrolledStudents: 12, 
  },
  {
    date: '2023-09-04',
    enrolledStudents: 18, 
  },
  {
    date: '2023-09-05',
    enrolledStudents: 20, 
  },
  {
    date: '2023-09-06',
    enrolledStudents: 22, 
  },
  {
    date: '2023-09-07',
    enrolledStudents: 25, 
  },
];

const InstructorStatistics = () => {
  return (
    <div
      className='mt-10'
      style={{
        width: '100%',
        height: '400px',
        backgroundColor: 'white', 
      }}
    >
      <h2 className='my-4 font-Lexend font-bold text-2xl laptop:text-base'>
        Enrolled Students Statistics
      </h2>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart data={enrollmentData}>
          <XAxis dataKey="date" style={{ fontSize: '12px', fill: 'black' }} />
          <YAxis style={{ fontSize: '12px', fill: 'black' }} />
          <Tooltip contentStyle={{ fontSize: '12px', color: 'black' }} />
          <Legend iconSize={12} iconType="rect" />
          <Line
            type="monotone"
            dataKey="enrolledStudents"
            stroke="black"
            strokeWidth={2}
            name="Enrolled Students"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InstructorStatistics;
