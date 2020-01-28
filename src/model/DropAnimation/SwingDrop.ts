import { keyframes, Keyframes } from "styled-components";

import DropAnimation from ".";
import AnimationInfo from "model/AnimationInfo";

export default class SwingDrop extends DropAnimation {
  protected maxMoveDistance: number;
  protected minReverseCount: number;
  protected maxReverseCount: number;

  constructor(
    maxMoveDistance: number,
    minReverseCount: number,
    maxReverseCount: number
  ) {
    super();
    this.maxMoveDistance = maxMoveDistance;
    this.minReverseCount = minReverseCount;
    this.maxReverseCount = maxReverseCount;
  }
  protected makeRandomKeyframes() {
    this.keyframes = [];
    const keyframeY = keyframes`
      0%{top:0px;}
      100%{top:100vh;}
    `;

    for (let k = 0; k < this.keyframesNum; k++) {
      const reverseTerm = Math.floor(
        100 /
          Math.floor(
            Math.random() * (this.maxReverseCount - this.minReverseCount) +
              this.minReverseCount
          )
      );
      let xDistance = 0;
      let animationX = "";
      let animationPosition = reverseTerm;

      animationX += `0%{transform:translateX(0px);}\n`;
      while (animationPosition < 100) {
        xDistance +=
          Math.random() * this.maxMoveDistance * 2 - this.maxMoveDistance;
        animationX += `${animationPosition}%{transform:translateX(${xDistance}px);}\n`;
        animationPosition += reverseTerm;
      }
      animationX += `100%{transform:translateX(${xDistance}px);}\n`;
      this.keyframes.push([keyframeY, keyframes`${animationX}`]);
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
