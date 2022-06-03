import { Evolution } from "../Evolution/Evolution.component";
import { FootprintDashboard } from "../FootprintDashboard/FootprintDashboard.component";
import { Ranking } from "../Ranking/Ranking.component";
import classes from "./HomeView.module.css";


export const HomeView: React.FC = () => {


    return (
        <div className={classes.container}>
            <div className={classes.topContainer}>
            <FootprintDashboard />
            <Evolution />
            
            </div>
            <Ranking />
        </div>
    );
};
