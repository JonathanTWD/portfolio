import { Download, Mail, MapPin } from "lucide-react";
import BrandIcon from "../components/BrandIcon";
import WindowControls from "../components/WindowControls";
import { CONTACT_EMAIL, RESUME_URL, socials } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import { useTranslation } from "../i18n";

const Contact = () => {
  const t = useTranslation();

  return (
    <>
      <div className="window-header">
        <WindowControls target="contact" canMaximize={false} />
        <h2>{t.contact.title}</h2>
      </div>

      <div className="contact-card">
        <img
          src="/images/jonathan-1.jpeg"
          alt={t.contact.photoAlt}
          className="contact-photo"
        />
        <div>
          <h3>{t.contact.name}</h3>
          <p className="contact-role">{t.contact.role}</p>
          <p className="contact-location">
            <MapPin aria-hidden="true" />
            {t.contact.location}
          </p>
        </div>
        <p className="contact-intro">{t.contact.intro}</p>

        <a className="contact-primary" href={`mailto:${CONTACT_EMAIL}`}>
          <Mail aria-hidden="true" />
          {t.contact.email}
        </a>
        <p className="contact-email">{CONTACT_EMAIL}</p>

        <ul className="contact-links">
          {socials.map(({ id, link, icon, text }) => (
            <li key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <BrandIcon brand={icon} />
                {text}
              </a>
            </li>
          ))}
          <li>
            <a href={RESUME_URL} download="CV-Jonathan-Morera.pdf">
              <Download aria-hidden="true" />
              {t.resume.download}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
