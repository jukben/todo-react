import { DefaultTheme, ThemeProvider } from "styled-components";
import Sparkle from "react-sparkle";
import { lightTheme, barbieTheme } from "./styles/theme";

import { ThemeEnum } from "./types/styled";
import WomanIcon from "@mui/icons-material/Woman";
import { FC } from "react";
import GlobalStyles from "../src/styles/global";
import { TodoList } from "./components/TodoList";
import styled from "styled-components";
import useLocalStorage from "./hooks/useLocalStorage";
import { Box } from "@mui/material";

const App: FC = () => {
  const [theme, setTheme] = useLocalStorage<DefaultTheme>("theme", lightTheme);

  const themeToggle = () => {
    const newTheme = theme.type === ThemeEnum.barbie ? lightTheme : barbieTheme;

    setTheme(newTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          left: "50%",
          top: "50%",
          transform: "translateX(-50%)",
          margin: "140px 0 40px 0",
          padding: "10px 0 10px 0",
        }}
      >
        {theme.type === "barbie" ? (
          <Sparkle color="purple" flickerSpeed="slower" fadeOutSpeed={20} />
        ) : null}
        <Header>
          {theme.type === "barbie" ? "Pink-tastic Task List" : "Todo List"}
        </Header>
      </Box>
      <TodoList />
      <Footer>
        Double click on todo to edit <br />
        Orginally{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.maxim-grinev-resume.ru/"
        >
          © Maxim Grinev
        </a>
        , modified for ReactGirls{" "}
        <a target="_blank" rel="noreferrer" href="https://jukben.codes">
          © jukben
        </a>
      </Footer>
      <ThemeToggle onClick={themeToggle}>
        <WomanIcon fontSize="medium" />
      </ThemeToggle>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

export const Header = styled.h1`
  text-align: center;
  font-size: 48px;
`;

export const Footer = styled.h6`
  text-align: center;
  font-size: 14px;
  font-weight: 200;
  font-style: italic;
  opacity: 0.5;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: ${(props) => props.theme.colors.font};
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export default App;
