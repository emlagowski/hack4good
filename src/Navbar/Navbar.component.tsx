import classes from "./Navbar.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getUrl } from "../Utils/utils";
import { useCallback } from "react";

interface NavbarProps {
    name: string;
    dataUrl: string;
    setDataUrl: React.Dispatch<React.SetStateAction<string>>;
}

export const Navbar: React.FC<NavbarProps> = ({name, dataUrl, setDataUrl}) => {
    const handleClick = useCallback(() => {
        setDataUrl(getUrl(dataUrl));
    }, [dataUrl, setDataUrl]);

    return (
        <div className={classes.container} >
            <div className={classes.user} onClick={handleClick}><AccountCircleIcon style={{fontSize: '2rem', marginRight: '5px'}} />
                <div>
                    {name}
                </div>
            </div>
        </div>
    );
};
