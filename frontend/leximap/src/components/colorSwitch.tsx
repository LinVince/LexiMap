import { Stack, Switch, Box } from "@mui/material";
import { useEffect, useState } from "react";

interface DarkModeState {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ColorModeSwitch: React.FC<DarkModeState> = ({
  darkMode,
  setDarkMode,
}) => {
  const handleColorSwitch = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Access the root element
    const root = document.documentElement;

    const rootColorDark = getComputedStyle(root)
      .getPropertyValue("--root-color-dark")
      .trim();
    const rootColorLight = getComputedStyle(root)
      .getPropertyValue("--root-color-light")
      .trim();
    const rootBgColorDark = getComputedStyle(root)
      .getPropertyValue("--root-bg-color-dark")
      .trim();
    const rootBgColorLight = getComputedStyle(root)
      .getPropertyValue("--root-bg-color-light")
      .trim();
    const buttonBgColorDark = getComputedStyle(root)
      .getPropertyValue("--button-bg-color-dark")
      .trim();
    const buttonBgColorLight = getComputedStyle(root)
      .getPropertyValue("--button-bg-color-light")
      .trim();
    const buttonHoverBgColorDark = getComputedStyle(root)
      .getPropertyValue("--button-hover-bg-color-dark")
      .trim();
    const buttonHoverBgColorLight = getComputedStyle(root)
      .getPropertyValue("--button-hover-bg-color-light")
      .trim();
    const scrollbarBgColorDark = getComputedStyle(root)
      .getPropertyValue("--scrollbar-bg-color-dark")
      .trim();
    const scrollbarBgColorLight = getComputedStyle(root)
      .getPropertyValue("--scrollbar-bg-color-light")
      .trim();
    const scrollbarThumbColorDark = getComputedStyle(root)
      .getPropertyValue("--scrollbar-thumb-color-dark")
      .trim();
    const scrollbarThumbColorLight = getComputedStyle(root)
      .getPropertyValue("--scrollbar-thumb-color-light")
      .trim();

    // Update CSS variables based on dark mode state
    root.style.setProperty(
      "--root-color",
      darkMode ? rootColorDark : rootColorLight
    );
    root.style.setProperty(
      "--root-bg-color",
      darkMode ? rootBgColorDark : rootBgColorLight
    );
    root.style.setProperty(
      "--button-hover-bg-color",
      darkMode ? buttonHoverBgColorDark : buttonHoverBgColorLight
    );
    root.style.setProperty(
      "--button-bg-color",
      darkMode ? buttonBgColorDark : buttonBgColorLight
    );
    root.style.setProperty(
      "--scrollbar-bg-color",
      darkMode ? scrollbarBgColorDark : scrollbarBgColorLight
    );
    root.style.setProperty(
      "--scrollbar-thumb-color",
      darkMode ? scrollbarThumbColorDark : scrollbarThumbColorLight
    );
  }, [darkMode]);

  return (
    <Box
      sx={{
        width: "150px",
        height: "auto",
        position: "absolute",
        top: "20px",
        right: "5px",
        zIndex: "999",
      }}
    >
      <Stack direction="row" alignItems="center">
        <Switch checked={darkMode} onChange={handleColorSwitch} />
        <div style={{ color: "var(--root-color)" }}>Dark Mode</div>
      </Stack>
    </Box>
  );
};

export default ColorModeSwitch;
