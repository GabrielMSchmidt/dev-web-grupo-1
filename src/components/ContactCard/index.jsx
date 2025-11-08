

export const ContactCard = ({ icon, title, content }) => {
    return (
        <div className="contact-card">
            <div className="contact-icon">{icon}</div> 
            <h4 className="contact-title">{title}</h4>
            <p className="contact-content">{content}</p>
        </div>
    );
}