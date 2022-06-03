import { DataProps } from "../../FootprintDashboard.component";
import { Activity } from "../Activity/Activity.component";
import classes from "./Activities.module.css";

interface FootPrintItem {
    category: string;
    emitted: string;
    emittedTrend: string;
    tip: string;
}
export const Activities: React.FC<DataProps> = ({data}) => {
const sum = data.footprints.map((item: FootPrintItem) => +item.emitted).reduce((sum: number, val: number) => sum + val, 0);

    return (
        <div className={classes.container}>
            {data.footprints?.map((item: FootPrintItem) =>  <Activity name={item.category} count={item.emitted} trend={item.emittedTrend} tip={item.tip} />)}
            <div className={classes.total}>
            <div className={classes.title}>TOTAL NUMBER</div>
            <div className={classes.text}>{sum}g</div>
            </div>
        </div>
    );
};
