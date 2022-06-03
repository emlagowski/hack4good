import axios from "axios";
import { useEffect, useState } from "react";
import { Evolution } from "../Evolution/Evolution.component";
import { FootprintDashboard } from "../FootprintDashboard/FootprintDashboard.component";
import { Ranking } from "../Ranking/Ranking.component";
import classes from "./HomeView.module.css";


export const HomeView: React.FC = () => {
    const [data, setData] = useState(null);
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
            <Evolution />
            
            </div>
            <Ranking />
        </div>
    );
};
