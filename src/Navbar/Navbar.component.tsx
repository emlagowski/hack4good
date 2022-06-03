import classes from "./Navbar.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface NavbarProps {
    name: string;
    isInitialUser: boolean;
    setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({name, setUser, isInitialUser}) => {

    const handleClick = () => {
        setUser(!isInitialUser);
    };

    return (
        <div className={classes.container} >
            <div className={classes.user} onClick={handleClick}><AccountCircleIcon style={{fontSize: '2rem', marginRight: '10px'}} /><div className={classes.name}>{name}</div></div>
        </div>
    );
};
