import { IRanking } from "../Utils/types";
import classes from "./RankingChart.module.css";
import { RankingChartBar } from "./RankingChartBar.component";

interface RankingChartProps {
    chart: IRanking;
}

export const RankingChart: React.FC<RankingChartProps> = ({chart}) => {
    const  { leader, me, before, after }= chart;
    return (
        <div className={classes.container}>
            <div className={classes.chart}>
                <RankingChartBar person={leader} height={1}/>
                <RankingChartBar person={before} height={10}/>
                <RankingChartBar person={me} height={20}/>
                <RankingChartBar person={after} height={30}/>
            </div>
        </div>
    );
};
