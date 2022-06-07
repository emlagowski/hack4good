import DashboardIcon from '@mui/icons-material/Dashboard';
import { ReactElement } from 'react';

import classes from './Title.module.css';
 
interface TitleProps {
    text: ReactElement;
}

export const Title: React.FC<TitleProps> = ({text}) => {
    return (
        <div className={classes.container}>
        <DashboardIcon style={{color: '#EA650D'}}/>
        <h2>
            {text}
        </h2>
        </div>
    );
};
