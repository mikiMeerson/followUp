import ContactGallery from "./contact-gallery";
import sectionStyle from '../styles/section.module.css';

const ContactSection = () => {
    return (
        <div className={sectionStyle.section}>
            <ContactGallery header="Recent Connections" />
            <ContactGallery header="Wanna say Hi?" secondaryHeader="It's been a while..." />
        </div>
    );
};

export default ContactSection;