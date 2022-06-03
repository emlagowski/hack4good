import classes from "./Activity.module.css";

interface ActivityProps {
    name: string;
    count: number;
}

export const Activity: React.FC<ActivityProps> = (props) => {
const { name, count } = props;

    return (
        <div className={classes.container}>
            <div>{name}</div>
            <div>{count}</div>
        </div>
    );
};
