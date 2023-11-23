import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../components/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { GiWallet } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { SiCodechef } from "react-icons/si";
import { FaTruckMoving } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const response = await axiosSecure.get("/admin-stats");
      return response.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const response = await axiosSecure.get("/order-stats");
      return response.data;
    },
  });

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
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

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Admin Home</title>
      </Helmet>
      <section>
        <h2 className="text-4xl font-cinzel font-semibold">
          Hi, Welcome Back!
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 md:gap-10">
          <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white rounded-lg flex items-center justify-center gap-6 py-8">
            <GiWallet className="h-12 w-12" />
            <span>
              <p className="text-4xl font-bold">${stats?.totalRevenue}</p>
              <p className="text-2xl">Revenue</p>
            </span>
          </div>
          <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white rounded-lg flex items-center justify-center gap-6 py-8">
            <FaUsers className="h-12 w-12" />
            <span>
              <p className="text-4xl font-bold">{stats?.customers}</p>
              <p className="text-2xl">Customers</p>
            </span>
          </div>
          <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white rounded-lg flex items-center justify-center gap-6 py-8">
            <SiCodechef className="h-12 w-12" />
            <span>
              <p className="text-4xl font-bold">{stats?.products}</p>
              <p className="text-2xl">Products</p>
            </span>
          </div>
          <div className="bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] text-white rounded-lg flex items-center justify-center gap-6 py-8">
            <FaTruckMoving className="h-12 w-12" />
            <span>
              <p className="text-4xl font-bold">{stats?.orders}</p>
              <p className="text-2xl">Orders</p>
            </span>
          </div>
        </div>
        {/* chart */}
        <div className="mt-20 flex flex-col 2xl:flex-row justify-center 2xl:justify-around items-center w-full">
          {/* bar chart */}
          <div className="">
            <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 20,
                right: 30,
                left: -20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Bar
                dataKey="quantity"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: "top" }}
              >
                {chartData?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                ))}
              </Bar>
            </BarChart>
          </div>
          {/* pie chart */}
          <div className="">
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminHome;
