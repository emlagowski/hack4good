import { DataProps } from "../../FootprintDashboard.component";
import { Challenge } from "../Challenge/Challenge.component";
import classes from "./Challenges.module.css";
import DashboardIcon from '@mui/icons-material/Dashboard';

interface ChallengeItem {
 name: string;
 streakDays: number;
 value: string;
}

export const Challenges: React.FC<DataProps> = ({data}) => {


    return (
        <div className={classes.container}>
            <h2><DashboardIcon style={{color: '#EA650D'}}/>Challenges for today</h2>
            <div className={classes.challengesContainer}>
            {data.challenges.map((item: ChallengeItem) => <Challenge name={item.name} amount={item.value} streak={item.streakDays} />)}
            </div>
        </div>
    );
};
