import { Footprints } from "./components/Footprints/Footprints.component";
import { Challenges } from "./components/Challenges/Challenges.component";
import classes from "./FootprintDashboard.module.css";
import { IChallenge, IFootprint } from '../Utils/types';
import { Title } from '../Title/Title.component';

export interface FootprintDashboardProps {
    footprints: IFootprint[];
    challenges: IChallenge[];
}

export const FootprintDashboard: React.FC<FootprintDashboardProps> = ({footprints, challenges}) => {
    return (
        <div className={classes.container}>
            <Title text={<span>How much CO<sub>2</sub> did I emit yesterday?</span>} />
            <Footprints footprints={footprints} />
            <Challenges challenges={challenges} />
        </div>
    );
};
