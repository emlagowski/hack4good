import { Activity } from "../Activity/Activity.component";
import classes from "./Activities.module.css";


export const Activities: React.FC = () => {


    return (
        <div className={classes.container}>
            <Activity name="Email" count={999} />
            <Activity name="Email" count={999} />
            <Activity name="Email" count={999} />
            <div className={classes.total}>
            <div className={classes.title}>TOTAL NUMBER</div>
            <div className={classes.text}>200g</div>
            </div>
        </div>
    );
};
