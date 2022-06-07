import { IFootprint } from "../../../Utils/types";
import { Footprint } from "../Footprint/Footprint.component";
import classes from "./Footprints.module.css";

interface FootprintsProps {
    footprints: IFootprint[];
}
export const Footprints: React.FC<FootprintsProps> = ({footprints}) => {
const sum = footprints?.map((item) => +item.emitted).reduce((sum: number, val: number) => sum + val, 0);

    return (
        <div className={classes.container}>
            {footprints?.map((footprint) => <Footprint key={footprint.category} footprint={footprint} />)}
            <div className={classes.total}>
            <div className={classes.title}>TOTAL NUMBER</div>
            <div className={classes.text}>{sum}g</div>
            </div>
        </div>
    );
};
