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
                top: 40,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" name="Your usage" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" name="Trends" stroke="#d88e84" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
    );
};
