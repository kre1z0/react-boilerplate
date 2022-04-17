import React, { FC, ReactElement, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Icon, IconButton, Radio } from "ui";
import { LanguageSwitch } from "components";

import { ROUTES } from "constants/routes";

import { themeActions } from "slices/theme";
import { saveTheme } from "styles/theme/utils";
import { selectThemeKey } from "slices/theme/selectors";

import { ThemeKeyType } from "slices/theme/types";

export const IndexPage: FC = (): ReactElement => {
  const theme = useSelector(selectThemeKey);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType;

    saveTheme(value);
    dispatch(themeActions.changeTheme(value));
  };

  return (
    <>
      <Radio
        id="system"
        label="System theme"
        className="radio"
        name="theme"
        onChange={handleThemeChange}
        value="system"
        isSelected={theme === "system"}
      />
      <Radio
        id="light"
        label="Light"
        className="radio"
        name="theme"
        onChange={handleThemeChange}
        value="light"
        isSelected={theme === "light"}
      />
      <Radio
        id="dark"
        label="Dark"
        className="radio"
        name="theme"
        onChange={handleThemeChange}
        value="dark"
        isSelected={theme === "dark"}
      />
      <div style={{ display: "flex" }}>
        <Icon size="1rem" type="home" />
        <Icon size="1.5rem" type="home" />
        <Icon size="2rem" type="home" />
        <IconButton size="2.5rem" type="home" />
      </div>
      <LanguageSwitch />
      <button onClick={() => navigate(ROUTES.Swagger)}>swagger</button>
    </>
  );
};
