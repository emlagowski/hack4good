import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import classes from "./Footprint.module.css";
import { IFootprint } from '../../../Utils/types';
import { getTrendArrow } from '../../../Utils/utils';

export interface FootprintProps {
    footprint: IFootprint;
}

export const Footprint: React.FC<FootprintProps> = ({footprint}) => {
const { category, emitted, emittedTrend, tip } = footprint;

    return (
        <div className={classes.container}>
            <div className={classes.name}>{category}</div>
            <div className={classes.count}>{emitted}<span className={classes.unit}>g</span>{getTrendArrow(emittedTrend)}</div>
            <div className={classes.tipContainer}>
                <div className={classes.tipIcon}><InfoOutlinedIcon style={{fontSize:'12px', marginRight: '5px'}} /></div>
                <div className={classes.tipContent}>
                    <div className={classes.tipTitle}>Tip:</div>
                    <div className={classes.tipText}>{tip}</div>
                </div>
            </div>
        </div>
    );
};
