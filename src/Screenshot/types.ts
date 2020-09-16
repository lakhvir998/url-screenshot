export interface ScreenshotProps {
  /**
   * The background color. Leave blank to auto set
   */
  color?: string;
  /**
   * The url to capture
   */
  url: string;
  /**
   * Whether or not to animate on hover
   */
  animate?: boolean;
  /**
   * enable dark mode
   */
  dark?: boolean;

  /**
   * Show the screenshot in fancy ways
   * ENUM ((NONE, SQUARE, LONG, LONGSLANT))
   */
  type?: "NONE" | "SQUARE" | "LONG" | "LONGSLANT";
}

export interface ContainerProps {
  readonly backgroundColor?: string;
}

export interface FigureProps {
  readonly type?: string;
}
