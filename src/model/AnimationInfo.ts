import { Keyframes, css } from "styled-components";

export default interface AnimationInfo {
  animation: Keyframes;
  durationMs: number;
  delayMs: number;
  fillMode: string;
  timingFunction: string;
}

export const convertCSS = (infos: AnimationInfo[]) =>
  infos.reduce(
    (pre, info, index) =>
      css`${pre}${
        index > 0 ? "," : ""
      }${css`${info.animation} ${info.durationMs}ms ${info.delayMs}ms ${info.fillMode} ${info.timingFunction}`}`,
    css``
  );
