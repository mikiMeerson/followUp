import { Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import InterestCard from "./interest-card";
import galleryStyle from '../styles/gallery.module.css';

const InterestGallery = () => {
    return (
        <div className={galleryStyle.container}>
            <Typography variant="h4" className={galleryStyle.header}>Interest Gallery</Typography>
            <div className={galleryStyle.gallery}>
                <ArrowBackIosIcon />
                {[1,2,3,4,5].map((card) => <InterestCard key={card} />)}
                <ArrowForwardIosIcon />
            </div>
        </div>
    );
};

export default InterestGallery;