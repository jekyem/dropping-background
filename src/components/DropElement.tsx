import React, { useEffect } from "react";
import styled from "styled-components";

import DropAnimation from "model/DropAnimation";
import { convertCSS } from "model/AnimationInfo";

interface DropElemnet {
  elementID: string;
  dropAnimation: DropAnimation;
  dropComponent: React.ReactNode;
  dropMsec: number;
  removeElement: (elementID: string) => void;
}

const DropElement = ({
  elementID,
  dropAnimation,
  dropComponent,
  dropMsec,
  removeElement
}: DropElemnet) => {
  const left = Math.random() * window.innerWidth;

  useEffect(() => {
    setTimeout(
      () => removeElement(elementID),
      dropMsec + dropAnimation.getAditionalExecuteTime()
    );
  }, [
    dropAnimation,
    dropAnimation.getAditionalExecuteTime,
    removeElement,
    dropMsec,
    elementID
  ]);

  const DropContainer = styled.div`
    position: absolute;
    top: 0px;
    left: ${left}px;
    animation: ${convertCSS(dropAnimation.getAnimationInfo(dropMsec))};
  `;

  return <DropContainer>{dropComponent}</DropContainer>;
};

export default DropElement;
