import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { ScreenshotProps, ContainerProps, FigureProps } from "./types";
import themes from "./theme";

const Container = styled.div<ContainerProps>`
min-width:
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid #ddd;
  box-sizing: border-box;
  overflow: hidden;
`;

const Figure = styled.figure<FigureProps>`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
  transform: ${(props) =>
    props.type === "LONG" ? "rotate(-50deg)" : "rotate(0deg)"};
`;

const Image = styled.img`
  max-width: 100%;
`;

/**
 * Stepper Wizard
 */
const Wizard: React.FC<ScreenshotProps> = ({
  color = "#F0FFFF",
  url,
  dark = false,
  animate = false,
  type = "NONE",
}) => {
  // const [showIframe, toggleIframe] = useState(false);
  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={theme}>
      <Container
        backgroundColor={color}
        // onMouseOver={() => toggleIframe(true)}
        // onMouseLeave={() => toggleIframe(false)}
      >
        <Figure type={type}>
          <Image src={url} alt={url} />
        </Figure>
      </Container>
    </ThemeProvider>
  );
};

export default Wizard;
