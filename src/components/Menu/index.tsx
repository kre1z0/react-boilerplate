import React, { FC, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { MenuContainer } from "./styled";

import { translations } from "locales/translations";

export const Menu: FC<{}> = (): ReactElement => {
  const { t } = useTranslation();

  return <MenuContainer>{t(translations.menu)}</MenuContainer>;
};
