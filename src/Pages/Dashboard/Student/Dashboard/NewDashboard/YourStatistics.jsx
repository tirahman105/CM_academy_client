import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const userLearningData = [
  {
    date: "2023-09-01",
    hoursLearned: 2.5,
  },
  {
    date: "2023-09-02",
    hoursLearned: 1.8,
  },
  {
    date: "2023-09-03",
    hoursLearned: 3.2,
  },
  {
    date: "2023-09-04",
    hoursLearned: 2.9,
  },
  {
    date: "2023-09-05",
    hoursLearned: 1.5,
  },
  {
    date: "2023-09-06",
    hoursLearned: 2.7,
  },
  {
    date: "2023-09-08",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-09",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-10",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-11",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-12",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-06",
    hoursLearned: 2.7,
  },
  {
    date: "2023-09-08",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-09",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-10",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-11",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-12",
    hoursLearned: 3.5,
  },{
    date: "2023-09-06",
    hoursLearned: 2.7,
  },
  {
    date: "2023-09-08",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-09",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-10",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-11",
    hoursLearned: 3.5,
  },
  {
    date: "2023-09-12",
    hoursLearned: 3.5,
  },
  
];

const YourStatistics = () => {
  return (
    <div
      className="mt-10"
      style={{
        width: "100%",
        height: "400px",
        backgroundColor: "white",
      }}
    >
      <h2 className="my-4 font-Lexend font-bold text-2xl">
        Daily Hours Learned
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={userLearningData}>
          <XAxis dataKey="date" style={{ fontSize: "12px", fill: "black" }} />
          <YAxis style={{ fontSize: "12px", fill: "black" }} />
          <Tooltip contentStyle={{ fontSize: "12px", color: "black" }} />
          <Legend iconSize={12} iconType="rect" />
          <Line
            type="monotone"
            dataKey="hoursLearned"
            stroke="black" // Set line color to white
            strokeWidth={2}
            name="Hours Learned"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YourStatistics;
