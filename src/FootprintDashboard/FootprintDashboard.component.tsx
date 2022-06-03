import { Activities } from "./components/Activities/Activities.component";
import classes from "./FootprintDashboard.module.css";

export const FootprintDashboard: React.FC = () => {


    return (
        <div className={classes.container}>
            <h2>How much CO2 did I emmit yesterday?</h2>
            <Activities />
            <h3>TOTAL 1000 kg CO2</h3>
        </div>
    );
};
