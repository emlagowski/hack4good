
import Button from "@mui/material/Button";
import classes from "./Challenge.module.css";

interface ChallengeProps {
    name: string;
    amount: string;
    streak: number;
}

export const Challenge: React.FC<ChallengeProps> = (props) => {
const {name, amount, streak} = props;

    return (
        <div className={classes.container}>
            <div className={classes.small}>{streak} {streak > 1 ? "days" : "day"} in a row</div>
            <div className={classes.name}>{name}</div>
            <div className={classes.small}>that will save</div>
            <div className={classes.amount}>{amount}g</div>
            <Button variant="contained" style={{backgroundColor: 'white', color: '#336FCB'}}>I CHOOSE THIS</Button>
        </div>
    );
};
