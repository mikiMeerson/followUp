import { Typography } from '@mui/material';
import navbarStyle from '../styles/navbar.module.css';

const Navbar = () => {
    return <div className={navbarStyle.navbar}>
        <div>user</div>
        <Typography variant="h2">FollowUP</Typography>
        <div>options</div>
    </div>;
};

export default Navbar;