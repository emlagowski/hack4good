import { IUser } from "../Utils/types";
import classes from "./RankingChartBar.module.css";

interface RankingChartPersonProps {
    person: IUser,
    height: number
}

export const RankingChartBar: React.FC<RankingChartPersonProps> = ({ person, height }) => {
    const  { url, value } = person;
    // Change to highlighting the user score based on the logged in user's id once it's added
    const barClass = height === 20 ? classes.barMe : classes.bar;

    return (
        <div className={classes.barContainer}>
            <div>{value}</div>
            <div className={barClass} style={{ height }} />
            <img src={url} alt="avatar" width="20" />
        </div>
    );
};
