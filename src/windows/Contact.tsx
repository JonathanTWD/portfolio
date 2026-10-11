import WindowControls from "../components/WindowControls";
import { socials } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="contact-content flex flex-col gap-5 p-5">
        <div className="contact-intro space-y-5">
          <img
            src="/images/jonathan-1.jpeg"
            alt="adrian"
            className="w-20 rounded-full"
          />

          <h3>Let's connect</h3>
        </div>

        <div className="contact-details space-y-5">
          <p>jonathanmoreraapaza@gmail.com</p>
          <ul>
            {socials.map(({ id, bg, link, icon, text }) => (
              <li key={id} style={{ backgroundColor: bg }}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={text}
                >
                  <img src={icon} alt={text} className="size-5" />
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
