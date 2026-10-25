import WindowControls from "../components/WindowControls";
import { techStack } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import { useTranslation } from "../i18n";

import { Check } from "lucide-react";

const technologyCount = techStack.reduce(
  (total, { items }) => total + items.length,
  0,
);

const Terminal = () => {
  const t = useTranslation();

  return (
    <>
      <div className="window-header">
        <WindowControls target="terminal" />
        <h2>{t.terminal.title}</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@jonathandev % </span>
          {t.terminal.command}
        </p>

        <div className="label">
          <p className="w-56">{t.terminal.category}</p>
          <p>{t.terminal.technologies}</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center">
              <Check className="check" size={20} />
              <h3>{t.terminal.categories[category]}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={item}>
                    {item}
                    {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="footnote">
          <Check size={20} />
          {t.terminal.summary(techStack.length, technologyCount)}
        </p>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
