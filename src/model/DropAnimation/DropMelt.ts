import { keyframes, Keyframes } from "styled-components";

import DropAnimation from ".";
import AnimationInfo from "model/AnimationInfo";

const MELT_MSEC = 2000;

export default class DropMelt extends DropAnimation {
  private meltPoint: number = 0;
  constructor(meltPoint: number) {
    super();
    this.meltPoint = meltPoint;
  }

  protected makeRandomKeyframes() {
    this.keyframes = [];
    const avgDiameter = this.meltPoint;

    for (let i = 0; i < 50; i++) {
      const result: Keyframes[] = [];

      result.push(keyframes`
          0%{transform:translateY(0px);}
        100%{transform:translateY(calc(100vh - ${avgDiameter / 2}px));}`);

      result.push(keyframes`
      0%{transform:translateY(calc(100vh - ${avgDiameter / 2}px)) scaleX(1)}
      50%{transform:translateY(calc(100vh - ${avgDiameter / 3}px)) scaleX(1.5)};
      100%{transform:translateY(100vh) scaleX(2)}`);

      this.keyframes.push(result);
    }
  }

  public makeRandomInfo(dropMsec: number): AnimationInfo[] {
    const randomIndex = Math.floor(Math.random() * this.keyframesNum);

    return [
      {
        animation: (this.keyframes as Keyframes[][])[randomIndex][0],
        durationMs: dropMsec,
        delayMs: 0,
        fillMode: "forwards",
        timingFunction: "linear"
      },
      {
        animation: (this.keyframes as Keyframes[][])[randomIndex][1],
        durationMs: MELT_MSEC,
        delayMs: dropMsec,
        fillMode: "forwards",
        timingFunction: "ease-in-out"
      }
    ];
  }
  public getAditionalExecuteTime(): number {
    return MELT_MSEC;
  }
}
