import { keyframes, Keyframes } from "styled-components";

import DropAnimation from ".";
import AnimationInfo from "model/AnimationInfo";

export default class Drop extends DropAnimation {
  protected makeRandomKeyframes() {
    this.keyframes = [];

    this.keyframes.push(keyframes`
          0%{transform:translateY(0px);}
        100%{transform:translateY(100vh);}`);
  }

  public makeRandomInfo(dropMsec: number): AnimationInfo[] {
    return [
      {
        animation: (this.keyframes as Keyframes[])[0],
        durationMs: dropMsec,
        delayMs: 0,
        fillMode: "forwards",
        timingFunction: "linear"
      }
    ];
  }
  public getAditionalExecuteTime(): number {
    return 0;
  }
}
