import classes from "./RankingChart.module.css";
import { RankingChartBar } from "./RankingChartBar.component";

interface RankingChartProps {
    chart: IRankingChart
    title: string
}

export interface IRankingChart {
    leader: RankingChartPerson;
    before: RankingChartPerson;
    me: RankingChartPerson;
    after: RankingChartPerson;
}

interface RankingChartPerson {
    url: string,
    value: number,
    position: number
}

export const RankingChart: React.FC<RankingChartProps> = (props) => {
    const  { leader, me, before, after }= props.chart;
    return (
        <div className={classes.container}>
            <div>{props.title}</div>
            <div className={classes.chart}>
                <RankingChartBar person={leader} height={1}/>
                <RankingChartBar person={before} height={10}/>
                <RankingChartBar person={me} height={20}/>
                <RankingChartBar person={after} height={30}/>
            </div>
        </div>
    );
};
