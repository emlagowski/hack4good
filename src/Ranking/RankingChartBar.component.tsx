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
    const  { url, value, position }= props.person;
    return (
        <div className={classes.barcontainer}>
            <div>{value}.</div>
            <div className={classes.bar} style={{height: props.height}}>
                {position} g
            </div>
            <img src={url} alt="avatar"/>
        </div>
    );
};
