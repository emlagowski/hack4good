import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { Trend } from "./types"
import { switchUrl, url } from './consts';

export const getTrendArrow = (trend: Trend) => {
    switch (trend) {
        case Trend.Up: return <ArrowUpwardIcon style={{marginLeft: '10px', backgroundColor: '#5AA896', padding: '5px', borderRadius: '5px'}} />;
        case Trend.Down: return <ArrowDownwardIcon style={{marginLeft: '10px', backgroundColor: '#D70000', padding: '5px', borderRadius: '5px'}} />;
        default: return null;
    }
}

export const getUrl = (currentUrl: string) => {
    return currentUrl === url ? switchUrl : url;
}