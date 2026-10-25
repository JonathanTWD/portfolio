import WindowControls from "../components/WindowControls";
import { CONTACT_EMAIL, socials } from "../constants";
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

      <div className="flex flex-col gap-5 p-5">
        <div className="space-y-5">
          <img
            src="/images/jonathan-1.jpeg"
            alt={t.contact.photoAlt}
            className="w-20 rounded-full"
          />

          <h3>{t.contact.heading}</h3>
        </div>

        <div className="space-y-5">
          <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
          <ul>
            {socials.map(({ id, bg, link, icon, text }) => (
              <li key={id} style={{ backgroundColor: bg }}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={text}
                >
                  <img src={icon} alt="" className="size-5" />
                  <p>{text}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
