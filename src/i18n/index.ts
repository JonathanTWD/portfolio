import useLanguageStore from "../store/language";
import en from "./locales/en";
import es, { type Dictionary } from "./locales/es";
import type { Language, LocationText, LocationTextId } from "./types";

export type { Dictionary };
export * from "./types";

const dictionaries: Record<Language, Dictionary> = { es, en };

export const useTranslation = () => {
  const language = useLanguageStore((state) => state.language);
  return dictionaries[language];
};

type TranslatableLocation = {
  name?: string;
  textId?: LocationTextId;
};

export const getLocationText = (
  t: Dictionary,
  location: TranslatableLocation,
): LocationText => {
  const text = location.textId ? t.locations[location.textId] : undefined;

  return {
    name: text?.name ?? location.name ?? "",
    subtitle: text?.subtitle,
    description: text?.description,
  };
};
