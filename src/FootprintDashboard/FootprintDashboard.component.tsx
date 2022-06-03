import { Activities } from "./components/Activities/Activities.component";
import { Challenges } from "./components/Challenges/Challenges.component";
import classes from "./FootprintDashboard.module.css";

export const FootprintDashboard: React.FC = () => {


    return (
        <div className={classes.container}>
            <h2>How much CO<sub>2</sub> did I emmit yesterday?</h2>
            <Activities />
            <Challenges />

        </div>
    );
};
