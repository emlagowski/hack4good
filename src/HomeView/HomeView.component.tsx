import axios from "axios";
import { useEffect, useState } from "react";
import { Evolution } from "../Evolution/Evolution.component";
import { FootprintDashboard } from "../FootprintDashboard/FootprintDashboard.component";
import { Navbar } from "../Navbar/Navbar.component";
import { Ranking } from "../Ranking/Ranking.component";
import { url } from "../Utils/consts";
import { Data } from "../Utils/types";
import classes from "./HomeView.module.css";

export const HomeView: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);
    const [dataUrl, setDataUrl] = useState(url);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(dataUrl);
            setData(response.data);
        };
        fetchData();

    }, [dataUrl]);

    return (
        <>
            {data && <Navbar name={data.name} setDataUrl={setDataUrl} dataUrl={dataUrl} />}
            <div className={classes.container}>
                <div className={classes.topContainer}>
                    {data && <FootprintDashboard footprints={data.footprints} challenges={data.challenges} />}
                    {data && <Evolution chart={data.chart}/>}
                </div>
                {data && <Ranking rankings={data.rankings} />}
            </div>
        </>
    );
};
