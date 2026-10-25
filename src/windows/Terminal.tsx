import { Check } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import WindowControls from "../components/WindowControls";
import {
  CONTACT_EMAIL,
  locations,
  socials,
  techStack,
  type FileLocation,
} from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import {
  LANGUAGES,
  useTranslation,
  type Dictionary,
  type Language,
} from "../i18n";
import useLanguageStore from "../store/language";
import useThemeStore, { type Theme } from "../store/theme";
import useWindowStore from "../store/window";

const COMMANDS = [
  "help",
  "skills",
  "about",
  "experience",
  "education",
  "projects",
  "contact",
  "cv",
  "theme",
  "lang",
  "clear",
] as const;

type Command = (typeof COMMANDS)[number];

const SUGGESTIONS: Command[] = ["help", "about", "experience", "contact"];

/** "auto" reads better than "system" when typed. */
const THEME_ARGUMENTS: Record<string, Theme> = {
  light: "light",
  dark: "dark",
  auto: "system",
};

const PROMPT = "jonathan@portfolio ~ %";

const technologyCount = techStack.reduce(
  (total, { items }) => total + items.length,
  0,
);

const isCommand = (name: string): name is Command =>
  (COMMANDS as readonly string[]).includes(name);

const parse = (input: string) => {
  const [name = "", ...args] = input.trim().toLowerCase().split(/\s+/);
  return { name, argument: args[0] };
};

type Entry = { id: number; input: string };

const Terminal = () => {
  const t = useTranslation();
  const openWindow = useWindowStore((state) => state.openWindow);
  const setTheme = useThemeStore((state) => state.setTheme);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const [entries, setEntries] = useState<Entry[]>([{ id: 0, input: "skills" }]);
  const [value, setValue] = useState("");
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const nextId = useRef(1);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const endRef = useRef<HTMLDivElement | null>(null);

  const history = entries.map((entry) => entry.input);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [entries]);

  /** Side effects happen once, when the command is run. */
  const runEffects = (input: string) => {
    const { name, argument } = parse(input);

    if (name === "cv") openWindow("resume");
    if (name === "theme" && argument && argument in THEME_ARGUMENTS)
      setTheme(THEME_ARGUMENTS[argument]);
    if (name === "lang" && LANGUAGES.includes(argument as Language))
      setLanguage(argument as Language);
  };

  const run = (input: string) => {
    const command = input.trim();
    setValue("");
    setHistoryIndex(null);
    if (!command) return;

    if (parse(command).name === "clear") {
      setEntries([]);
      return;
    }

    runEffects(command);
    setEntries((current) => [
      ...current,
      { id: nextId.current++, input: command },
    ]);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") return run(value);

    if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      return setEntries([]);
    }

    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      if (history.length === 0) return;

      const last = history.length - 1;
      const index =
        event.key === "ArrowUp"
          ? Math.max(0, (historyIndex ?? history.length) - 1)
          : Math.min(last + 1, (historyIndex ?? last) + 1);

      setHistoryIndex(index > last ? null : index);
      setValue(index > last ? "" : history[index]);
    }
  };

  return (
    <>
      <div className="window-header">
        <WindowControls target="terminal" />
        <h2>{t.terminal.title}</h2>
      </div>

      <div
        className="terminal-body"
        onClick={() => {
          if (!window.getSelection()?.toString()) inputRef.current?.focus();
        }}
      >
        <p className="terminal-muted">{t.terminal.intro}</p>

        <div role="log" aria-live="polite" className="terminal-log">
          {entries.map((entry) => (
            <div key={entry.id} className="terminal-entry">
              <p>
                <span className="terminal-prompt">{PROMPT}</span> {entry.input}
              </p>
              <Output input={entry.input} t={t} />
            </div>
          ))}
        </div>

        <label className="terminal-input">
          <span className="terminal-prompt">{PROMPT}</span>
          <span className="sr-only">{t.terminal.inputLabel}</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={onKeyDown}
            autoFocus
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
        </label>
        <div ref={endRef} />
      </div>

      <div className="terminal-suggestions">
        <span>{t.terminal.suggestions}</span>
        {SUGGESTIONS.map((command) => (
          <button key={command} type="button" onClick={() => run(command)}>
            {command}
          </button>
        ))}
      </div>
    </>
  );
};

/** What a command prints, rendered in the current language. */
const Output = ({ input, t }: { input: string; t: Dictionary }) => {
  const { name, argument } = parse(input);

  if (!isCommand(name)) return <p>{t.terminal.notFound(name)}</p>;

  switch (name) {
    case "help":
      return (
        <dl className="terminal-table">
          {COMMANDS.map((command) => (
            <div key={command}>
              <dt>{command}</dt>
              <dd>{t.terminal.commands[command]}</dd>
            </div>
          ))}
        </dl>
      );

    case "skills":
      return (
        <>
          <dl className="terminal-table">
            {techStack.map(({ category, items }) => (
              <div key={category}>
                <dt>
                  <Check aria-hidden="true" />
                  {t.terminal.categories[category]}
                </dt>
                <dd>{items.join(", ")}</dd>
              </div>
            ))}
          </dl>
          <p className="terminal-success">
            {t.terminal.summary(techStack.length, technologyCount)}
          </p>
        </>
      );

    case "about": {
      const about = t.locations.aboutMe;
      return (
        <>
          <p className="terminal-heading">
            {about.subtitle}, {about.meta}
          </p>
          {about.description?.slice(0, 2).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </>
      );
    }

    case "experience": {
      const job = t.locations.internship;
      return (
        <>
          <p className="terminal-heading">
            {job.subtitle} <span className="terminal-muted">({job.meta})</span>
          </p>
          {job.description?.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <ul>
            {job.bullets?.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </>
      );
    }

    case "education":
      return (
        <>
          {t.locations.studies.sections?.map((section) => (
            <p key={section.title}>
              <span className="terminal-heading">{section.title}</span>{" "}
              <span className="terminal-muted">({section.meta})</span>
            </p>
          ))}
          <ul>
            {t.locations.awards.bullets?.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </>
      );

    case "projects":
      return (
        <>
          {locations.work.children.map((project) => {
            const links = project.children.filter(
              (item): item is FileLocation =>
                item.kind === "file" && item.fileType === "url",
            );

            return (
              <div key={project.id}>
                <p className="terminal-heading">{project.name}</p>
                <p>{t.locations.canaccesibleProject.description?.[0]}</p>
                <p>
                  {t.terminal.projectLinks}{" "}
                  {links.map((link, index) => (
                    <span key={link.id}>
                      {index > 0 && ", "}
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.name}
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            );
          })}
        </>
      );

    case "contact":
      return (
        <dl className="terminal-table">
          <div>
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </dd>
          </div>
          {socials.map(({ id, text, link }) => (
            <div key={id}>
              <dt>{text}</dt>
              <dd>
                <a href={link} target="_blank" rel="noreferrer">
                  {link.replace("https://", "")}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      );

    case "cv":
      return <p>{t.terminal.opening(t.resume.title)}</p>;

    case "theme":
      return argument && argument in THEME_ARGUMENTS ? (
        <p className="terminal-success">
          {t.terminal.themeSet(
            t.settings.theme.options[THEME_ARGUMENTS[argument]],
          )}
        </p>
      ) : (
        <p>
          {t.terminal.usage(
            `theme ${Object.keys(THEME_ARGUMENTS).join(" | ")}`,
          )}
        </p>
      );

    case "lang":
      return LANGUAGES.includes(argument as Language) ? (
        <p className="terminal-success">
          {t.terminal.languageSet(
            t.settings.language.options[argument as Language],
          )}
        </p>
      ) : (
        <p>{t.terminal.usage(`lang ${LANGUAGES.join(" | ")}`)}</p>
      );

    case "clear":
      return null;
  }
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
