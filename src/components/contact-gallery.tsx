import { Typography } from '@mui/material';
import galleryStyle from '../styles/gallery.module.css';
import ContactCard from './contact-card';

interface Props {
    header: string;
    secondaryHeader?: string;
};

const ContactGallery = ({ header, secondaryHeader }: Props) => {
    return (
        <div className={galleryStyle.container}>
            <Typography variant="h5" className={galleryStyle.header}>{header}</Typography>
            <Typography variant="subtitle1" className={galleryStyle.secondaryHeader}>{secondaryHeader}</Typography>
            <div className={galleryStyle.gallery}>
                {[1,2,3, 4].map((card) => <ContactCard key={card} />)}
            </div>
        </div>
    );
};

export default ContactGallery;