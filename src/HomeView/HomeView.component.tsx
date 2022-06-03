import classes from "./HomeView.module.scss";


export const HomeView: React.FC = () => {


    return (
        <div className={classes.container}>
            <div className={classes.challenge}>Challenge I</div>
            <div className={classes.challenge}>Challenge II</div>
            <div className={classes.challenge}>Challenge III</div>
        </div>
    );
};
