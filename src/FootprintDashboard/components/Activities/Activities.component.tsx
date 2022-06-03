import { Activity } from "../Activity/Activity.component";
import classes from "./Activities.module.css";


export const Activities: React.FC = () => {


    return (
        <div className={classes.container}>
            <Activity name="Email" count={999} />
            <Activity name="Email" count={999} />
            <Activity name="Email" count={999} />
        </div>
    );
};
