import classes from "./RankingChartBar.module.css";

interface RankingChartPersonProps {
    person: RankingChartPerson,
    height: number
}

interface RankingChartPerson {
    url: string,
    value: number,
    position: number
}

export const RankingChartBar: React.FC<RankingChartPersonProps> = (props) => {
    const  { url, value }= props.person;
    const barClass = props.height === 20 ? classes.barMe : classes.bar;

    return (
        <div className={classes.barcontainer}>
            <div>{value}</div>
            <div className={barClass} style={{height: props.height}}>
                {/* {position} g */}
            </div>
            <img src={url} alt="avatar" width="20"/>
        </div>
    );
};
