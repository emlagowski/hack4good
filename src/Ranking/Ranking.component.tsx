import classes from "./Ranking.module.css";
import { IRanking } from "../Utils/types";
import { RankingChart } from "./RankingChart.component";
import { Title } from "../Title/Title.component";

interface RankingProps {
    rankings: IRanking[];
}

export const Ranking: React.FC<RankingProps> = ({rankings}) => {
    return (
        <div className={classes.container}>
            <Title text={<span>How do I compare to others?</span>} />
            <h3>Ranking</h3>

            <div className={classes.rankingContainer}>
                <h4 className={classes.rankingTitle}>You against peers</h4>
                <RankingChart chart={rankings[0]} />
            </div>

            <div className={classes.rankingContainer}>
                <h4 className={classes.rankingTitle}>You against other teams</h4>
                <RankingChart chart={rankings[1]} />
            </div>

        </div>
    );
};
