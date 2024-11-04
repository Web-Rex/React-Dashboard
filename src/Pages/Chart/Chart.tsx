import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import SecondChart from "../SecondChart/SecondChart";
const data = [
  { name: "Group A", value: 800 },
  { name: "Group B", value: 400 },
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 800 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ["#8ECF4D", "#5DBA2C"];
const COLORSs = ["#0088FE", "#00C49F", "#1C3353", "#1C3353"];

const Chart = () => {
  return (
    <div>
      <div>
        <h2 className="px-4 py-3 rounded bg-[#DAE6F5] text-[#262626]/70">
          <span className="font-semibold text-[#262626]">
            Read our documentation
          </span>{" "}
          with code samples
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mt-4">
        <div className="border py-4">
          <h2 className="text-base font-semibold text-[#262626]/70 border-b pb-4 px-4">
            Chart Title
          </h2>

          <div className="mt-8 h-[250px]">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={140}
                cy={80}
                innerRadius={40}
                outerRadius={80}
                fill="#fff"
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>

        <div className="border py-4">
          <h2 className="text-base font-semibold text-[#262626]/70 border-b pb-4 px-4">
            Chart Title
          </h2>

          <div className="mt-8 h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
                <Pie
                  data={data01}
                  cx={140}
                  cy={80}
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORSs[index % COLORSs.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
