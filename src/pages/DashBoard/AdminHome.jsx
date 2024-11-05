import { useQuery } from "@tanstack/react-query";
import { FaOpencart, FaUsers, FaWallet } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";



const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(data);

  const { data: chartData } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });
  console.log({ chartData });


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];


  // custom chart 1
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
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




  // custom chart 2


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

  const pieChartData=chartData?.map(data=>{
    return {name:data.category,value:data.revenue}
  })

  return (
    <div className="w-5/6 mx-auto mt-10">
      <h2 className="text-3xl font-bold">
        Hi, Welcome {!user ? "Back" : user?.displayName}!
      </h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 my-5 text-center">
        <div className="py-5 flex justify-center gap-4 items-center bg-gradient-to-r from-purple-400 to-slate-200 rounded-md text-white">
          <FaWallet className="text-white text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">{data?.revenue}</h3>
            <p className="text-lg font-semibold">Revenue</p>
          </div>
        </div>
        <div className="py-5 flex justify-center gap-4 items-center bg-gradient-to-r from-yellow-500 to-slate-200 rounded-md text-white">
          <FaUsers className="text-white text-4xl" />
          <div>
            <h3 className="text-2xl font-bold">{data?.users}</h3>
            <p className="text-lg font-semibold">Users</p>
          </div>
        </div>
        <div className="py-5 flex justify-center gap-4 items-center bg-gradient-to-r from-rose-500 to-slate-200 rounded-md text-white">
          <TbToolsKitchen2 className="text-white text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">{data?.menuItems}</h3>
            <p className="text-lg font-semibold">Menus</p>
          </div>
        </div>
        <div className="py-5 flex justify-center gap-4 items-center bg-gradient-to-r from-sky-400 to-slate-200 rounded-md text-white">
          <FaOpencart className="text-white text-3xl" />
          <div>
            <h3 className="text-2xl font-bold">{data?.orders}</h3>
            <p className="text-lg font-semibold">Orders</p>
          </div>
        </div>
      </div>


      

      <div className="lg:flex flex-row gap-10 mt-20 items-center">

        <div className=" mx-auto m-1 w-full flex-1">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
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


        <div className=" mx-auto m-1 w-full flex-1">
        
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData?.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend/>
            </PieChart>
         
        </div>
      </div>
    </div>
  );
};
export default AdminHome;
