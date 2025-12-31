

////components//ui//ExpiryChart.tsx//

import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { chartData } from "../../data/chartData";



const ExpiryChart = () => {
  const activeIndex = 5;

  return (

    <div style={{ width: "100%", height: "220px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
      
          margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
        >
          {/* X Axis */}
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#A0A0A0", fontSize: 10, fontFamily: "Poppins" }}
            interval={0}
            dy={10} 
          />

          {/* Bar Component */}
          <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={18}>
            {chartData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  index === activeIndex
                    ? "#C8E764"
                    : "#E9EDF7"
                }
                style={{ cursor: "pointer" }}
              />
            ))}
          </Bar>


          <ReferenceLine
            y={65}
            stroke="#A3AED0"
            strokeDasharray="5 5"
            strokeWidth={1}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpiryChart;