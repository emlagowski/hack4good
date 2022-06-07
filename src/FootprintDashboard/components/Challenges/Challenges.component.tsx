import { Challenge } from "../Challenge/Challenge.component";
import classes from "./Challenges.module.css";
import { IChallenge } from "../../../Utils/types";
import { Title } from "../../../Title/Title.component";

interface ChallengesProps {
    challenges: IChallenge[];
}

export const Challenges: React.FC<ChallengesProps> = ({challenges}) => {
    return (
        <div className={classes.container}>
            <Title text={<span>Challenges for today</span>} />
            <div className={classes.challengesContainer}>
            {challenges?.map((item) => <Challenge key={item.name} name={item.name} amount={item.value} streak={item.streakDays} />)}
            </div>
        </div>
    );
};
