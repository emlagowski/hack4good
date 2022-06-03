import classes from "./Ranking.module.css";
import { IRankingChart, RankingChart } from "./RankingChart.component";
import DashboardIcon from '@mui/icons-material/Dashboard';

interface RankingProps {
    data: IRankingChart[];
}
export const Ranking: React.FC<RankingProps> = ({data}) => {
/*     const data = [
        {
            "leader": {
                "url": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                "value": 1,
                "position": 220
            },
            "me": {
                "url": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                "value": 14,
                "position": 4678
            },
            "before": {
                "url": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                "value": 13,
                "position": 4500
            },
            "after": {
                "url": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                "value": 15,
                "position": 4900
            }
        },
        {
            "leader": {
                "url": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                "value": 1,
                "position": 2000
            },
            "me": {
                "url": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                "value": 101,
                "position": 12000
            },
            "before": {
                "url": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                "value": 100,
                "position": 10101
            },
            "after": {
                "url": "https://randomuser.me/api/portraits/thumb/men/75.jpg",
                "value": 1102,
                "position": 13000
            }
        }
    ] */

    return (
        <div className={classes.container}>
            <h2><DashboardIcon style={{color: '#EA650D'}}/>How do I compare to others?</h2>
            <h3>Ranking</h3>
            <RankingChart chart={data[0]} title="You against peers"/>
            <RankingChart chart={data[1]} title="You against other teams"/>
        </div>
    );
};
