import React, { FC, ReactElement } from "react";

import { Radio } from "ui";

import { useTranslation } from "react-i18next";

export const LanguageSwitch: FC<{}> = (): ReactElement => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value;

    i18n.changeLanguage(language).then();
  };

  return (
    <>
      <div>SELECT LANGUAGE</div>
      <Radio
        id="en"
        label="English"
        className="radio"
        name="language"
        onChange={handleLanguageChange}
        value="en"
        isSelected={i18n.language === "en"}
      />
      <Radio
        id="ua"
        label="Ukrainian"
        className="radio"
        name="language"
        onChange={handleLanguageChange}
        value="ua"
        isSelected={i18n.language === "ua"}
      />
    </>
  );
};
