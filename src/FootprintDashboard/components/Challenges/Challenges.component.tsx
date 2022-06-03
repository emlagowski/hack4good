import { Challenge } from "../Challenge/Challenge.component";
import classes from "./Challenges.module.css";

export const Challenges: React.FC = () => {


    return (
        <div className={classes.container}>
            <h2>Challenges for today</h2>
            <div className={classes.challengesContainer}>
            <Challenge name="name" amount={100} />
            <Challenge name="name" amount={100} />
            <Challenge name="name" amount={100} />
            </div>
        </div>
    );
};
