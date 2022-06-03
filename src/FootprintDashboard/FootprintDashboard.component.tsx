import { Activities } from "./components/Activities/Activities.component";
import { Challenges } from "./components/Challenges/Challenges.component";
import classes from "./FootprintDashboard.module.css";

export interface DataProps {
    data: any;
}
export const FootprintDashboard: React.FC<DataProps> = ({data}) => {

    return (
        <div className={classes.container}>
            <h2>How much CO<sub>2</sub> did I emmit yesterday?</h2>
            <Activities data={data} />
            <Challenges data={data} />

        </div>
    );
};