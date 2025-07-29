'use client';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '2011-03', uv: 10, pv: 0, amt: 0 },
  { name: '2011-05', uv: 40, pv: 20, amt: 10 },
  { name: '2011-07', uv: 30, pv: 50, amt: 20 },
  { name: '2011-09', uv: 50, pv: 40, amt: 30 },
  { name: '2011-11', uv: 20, pv: 30, amt: 50 },
  { name: '2012-01', uv: 35, pv: 20, amt: 60 },
  { name: '2012-03', uv: 55, pv: 50, amt: 70 },
  { name: '2012-05', uv: 70, pv: 30, amt: 60 },
  { name: '2012-07', uv: 40, pv: 35, amt: 30 },
  { name: '2012-09', uv: 10, pv: 10, amt: 10 },
];

export default function DashboardChart() {
  return (
    <div className="chart-wrapper">
      <h4 className="mb-4 ms-4 fw-bold">Chart Survey</h4>
      <div className="row text-center mb-4">
        <div className="col-md-3 col-6">
          <h5>$ 209</h5>
          <p className="text-secondary">Today's Income</p>
        </div>
        <div className="col-md-3 col-6">
          <h5>$ 837</h5>
          <p className="text-secondary">This Week's Income</p>
        </div>
        <div className="col-md-3 col-6">
          <h5>$ 3410</h5>
          <p className="text-secondary">This Month's Income</p>
        </div>
        <div className="col-md-3 col-6">
          <h5>$ 78,000</h5>
          <p className="text-secondary">This Year's Income</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF4081" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FF4081" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#000000" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#00E5FF" fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#FF4081" fillOpacity={1} fill="url(#colorPv)" />
          <Area type="monotone" dataKey="amt" stroke="#000000" fillOpacity={1} fill="url(#colorAmt)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
