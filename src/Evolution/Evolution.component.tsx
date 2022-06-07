import classes from "./Evolution.module.css";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IChart } from "../Utils/types";
import { Title } from "../Title/Title.component";

interface EvolutionProps {
  chart: IChart[];
}

export const Evolution: React.FC<EvolutionProps> = ({chart}) => {
  const data = chart.map(({name, uv, pv})=> ({name, uv: +uv, pv: +pv}));

    return (
        <div className={classes.container}>
          <Title text={<span>How much CO<sub>2</sub> do I emit over time?</span>} />
          <ResponsiveContainer height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10,
                bottom: 60,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis height={33340} />
              <Tooltip />
              <Legend />
              <Line type="natural" dataKey="pv" name="Your usage" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="natural" dataKey="uv" name="Trends" stroke="#d88e84" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
    );
};
