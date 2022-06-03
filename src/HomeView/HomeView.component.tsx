import axios from "axios";
import { useEffect, useState } from "react";
import { Evolution, Point } from "../Evolution/Evolution.component";
import { FootprintDashboard } from "../FootprintDashboard/FootprintDashboard.component";
import { Ranking } from "../Ranking/Ranking.component";
import classes from "./HomeView.module.css";

interface Data {
    chart: Point[];
}

export const HomeView: React.FC = () => {
    const [data, setData] = useState<Data|null>(null);
    useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get("https://api.haag4good.pl/data");
        setData(response.data);
        console.log(response.data);
    };
    fetchData();

}, []);

    return (
        <div className={classes.container}>
            <div className={classes.topContainer}>
            {data && <FootprintDashboard data={data} />}
            {data && <Evolution data={data.chart}/>}
            </div>
            <Ranking />
        </div>
    );
};
