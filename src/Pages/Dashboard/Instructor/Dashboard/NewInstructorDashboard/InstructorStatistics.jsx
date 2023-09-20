import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const enrollmentData = [
  {
    date: "2023-09-01",
    enrolledStudents: 10,
  },
  {
    date: "2023-09-02",
    enrolledStudents: 15,
  },
  {
    date: "2023-09-03",
    enrolledStudents: 12,
  },
  {
    date: "2023-09-04",
    enrolledStudents: 18,
  },
  {
    date: "2023-09-05",
    enrolledStudents: 20,
  },
  {
    date: "2023-09-06",
    enrolledStudents: 22,
  },
  {
    date: "2023-09-07",
    enrolledStudents: 25,
  },
];

const InstructorStatistics = () => {
  return (
    <div className="mt-10 w-[100%] tablet:h-[400px] mobile:h-[300px]  pr-6 ">
      <h2 className="my-4 font-Lexend font-bold text-2xl laptop:text-base">
        Enrolled Students Statistics
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={enrollmentData}>
          <XAxis dataKey="date" style={{ fontSize: "9px", fill: "black" }} />
          <YAxis style={{ fontSize: "9px", fill: "black" }} />
          <CartesianGrid stroke="" color="red"  strokeDasharray="5 5"/>
          <Tooltip contentStyle={{ fontSize: "12px", color: "black" }} />
          <Legend iconSize={16} iconType="circle" />
          <Line
            className=""
            type="monotone"
            dataKey="enrolledStudents"
            stroke="black"
            strokeWidth={2}
            name="Enrolled Students"
            dot={{ r: 3 }}
            textDecoration={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InstructorStatistics;
