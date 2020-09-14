import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ScreenshotProps, ContainerProps } from "./types";
import themes from "./theme";

const Container = styled.div<ContainerProps>`
min-width:
  width: 100%;
  padding: 15px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid #ddd;
  box-sizing: border-box;
`;

const Figure = styled.figure`
  width: 100%;
  box-sizing: border-box;
  margin: 0;
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
  const theme = dark ? themes.dark : themes.light;
  const [screenshot, setScreeshot] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setLoading(true);
    setErrors({});
    fetch(`https://screenshotapi.net/api/v1/screenshot?url=${url}`)
      .then((resp) => {
        return resp.json();
      })
      .then((json) => {
        if (json.errors) {
          setErrors(json.errors);
        } else {
          setScreeshot(json.screenshot);
        }
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setErrors({ serverError: "Something wnet wrong!" });
      });
  }, [url]);

  return (
    <ThemeProvider theme={theme}>
      <Container backgroundColor={color}>
        {loading ? (
          <p>Loading screenshot...</p>
        ) : (
          <a href={url} title={url} target="_blank">
            <Figure>
              <Image src={screenshot} alt={url} />
            </Figure>
          </a>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Wizard;
