import React from "react";
import { shallow, configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Screenshot from "./Screenshot";
import { ScreenshotProps } from "./types";

configure({ adapter: new ReactSixteenAdapter() });

const renderScreenshot = (props: Partial<ScreenshotProps> = {}) => {
  const defaultProps: ScreenshotProps = {
    color: "#F5F5DC",
    url: process.env.PUBLIC_URL + "/demo.png",
    type: "NONE",
    animate: false,
  };
  return render(<Screenshot {...defaultProps} {...props} />);
};

describe("<Screenshot />", () => {
  test("renders the component", () => {
    const component = shallow(
      <Screenshot url={process.env.PUBLIC_URL + "/demo.png"} type="LONG" />
    );
    expect(component).toMatchSnapshot();
  });
});
