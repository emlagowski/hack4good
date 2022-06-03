import axios from "axios";
import { useEffect, useState } from "react";
import { Evolution, Point } from "../Evolution/Evolution.component";
import { FootprintDashboard } from "../FootprintDashboard/FootprintDashboard.component";
import { Navbar } from "../Navbar/Navbar.component";
import { Ranking } from "../Ranking/Ranking.component";
import { IRankingChart } from "../Ranking/RankingChart.component";
import classes from "./HomeView.module.css";

interface Data {
    chart: Point[];
    rankings: IRankingChart[];
    name: string;
}

export const HomeView: React.FC = () => {
    const [data, setData] = useState<Data|null>(null);
    const [isInitialUser, setIsInitialUser] = useState(true);
    const url = isInitialUser ? "https://api.haag4good.pl/data" : "https://api.haag4good.pl/data?userSwitch=true";
    useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
    };
    fetchData();

}, [url]);

    return (
        <>
        {data && <Navbar name={data.name} setUser={setIsInitialUser} isInitialUser={isInitialUser} />}
        <div className={classes.container}>
            
            <div className={classes.topContainer}>
            {data && <FootprintDashboard data={data} />}
            {data && <Evolution data={data.chart}/>}
            </div>
            {data && <Ranking data={data.rankings} />}
        </div>
        </>
    );
};
