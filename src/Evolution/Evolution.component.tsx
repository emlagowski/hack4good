import classes from "./Evolution.module.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface DataProps {
  data: Point[];
}

export interface Point {
  name: string;
  uv: number;
  pv: number;
}

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3500,
//     pv: 1398,
//   },
//   {
//     name: 'Page C',
//     uv: 3000,
//     pv: 9800,
//   },
//   {
//     name: 'Page D',
//     uv: 2500,
//     pv: 3908,
//   },
//   {
//     name: 'Page E',
//     uv: 2000,
//     pv: 4800,
//   },
//   {
//     name: 'Page F',
//     uv: 1500,
//     pv: 3800,
//   },
//   {
//     name: 'Page G',
//     uv: 1000,
//     pv: 4300,
//   },
// ];

export const Evolution: React.FC<DataProps> = (props) => {
    const data = props.data;

    return (
        <div className={classes.container}>
            <h2>How much CO<sub>2</sub> do I emmit over time?</h2>

        <ResponsiveContainer height="80%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#d88e84" dot={false} />
        </LineChart>
</ResponsiveContainer>
        </div>
    );
};
