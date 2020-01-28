import { Keyframes } from "styled-components";
import animationInfo from "model/AnimationInfo";

const MAX_KEYFRAME_NUM = 50;

export default abstract class DropAnimation {
  protected keyframes: Array<Keyframes[] | Keyframes> | null;
  protected keyframesNum: number;

  public constructor() {
    this.keyframes = null;
    this.keyframesNum = MAX_KEYFRAME_NUM;
  }

  public getAnimationInfo = (dropMesc: number): animationInfo[] => {
    if (this.keyframes === null) this.makeRandomKeyframes();
    return this.makeRandomInfo(dropMesc);
  };

  protected abstract makeRandomKeyframes(): void;
  public abstract makeRandomInfo(dropMesc: number): animationInfo[];
  public abstract getAditionalExecuteTime(): number;
}
