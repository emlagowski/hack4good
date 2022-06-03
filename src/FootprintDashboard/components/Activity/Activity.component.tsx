import classes from "./Activity.module.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export interface ActivityProps {
    name: string;
    count: string;
    tip: string;
    trend: string;
}

export const Activity: React.FC<ActivityProps> = (props) => {
const { name, count, trend, tip } = props;

const isUptrend = trend === "UP";

    return (
        <div className={classes.container}>
            <div className={classes.name}>{name}</div>
            <div className={classes.count}>{count}<span className={classes.unit}>g</span>{isUptrend ? <ArrowUpwardIcon style={{marginLeft: '5px'}} /> : <ArrowDownwardIcon style={{marginLeft: '5px'}} />}</div>
            <div className={classes.tipContainer}>
                <div className={classes.tipIcon}><InfoOutlinedIcon style={{fontSize:'12px', marginRight: '5px'}} /></div>
                <div className={classes.tipContent}>
                    <div className={classes.tipTitle}>Tip:</div>
                    <div className={classes.tipText}>{tip}</div>
                </div>
            </div>
        </div>
    );
};
