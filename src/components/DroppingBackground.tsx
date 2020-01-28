import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import DropElement from "components/DropElement";
import DropAnimation from "model/DropAnimation";
import styled from "styled-components";

export const Canvus = styled.div`
  position: fixed;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: -999;
`;

interface PropsType {
  maxElementCount: number;
  createTimeInterval: number;
  dropAnimation: DropAnimation;
  dropComponent: React.ReactNode;
  maxDropMsec: number;
  minDropMesc: number;
}

const DroppingBackground = ({
  maxElementCount,
  createTimeInterval,
  dropAnimation,
  dropComponent,
  maxDropMsec,
  minDropMesc
}: PropsType) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  let elementCount = 0;
  let nextID = 0;

  const getElementID = () => {
    nextID = (nextID + 1) % (maxElementCount * 3);
    return String(nextID);
  };

  const removeElement = (flakeID: string) => {
    const flake = document.getElementById(flakeID);
    if (canvasRef.current && flake) {
      canvasRef.current.removeChild(flake);
      elementCount--;
    }
  };

  const MakeDropElementComponent = () => {
    const element = document.createElement("div");
    element.id = getElementID();

    ReactDOM.render(
      <DropElement
        key={element.id}
        elementID={element.id}
        dropAnimation={dropAnimation}
        dropComponent={dropComponent}
        dropMsec={Math.random() * (maxDropMsec - minDropMesc) + minDropMesc}
        removeElement={(elementID: string) => removeElement(elementID)}
      />,
      element
    );

    return element;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const createElement = () => {
    if (elementCount < maxElementCount && canvasRef.current) {
      elementCount++;
      canvasRef.current.appendChild(MakeDropElementComponent());
    }
  };

  useEffect(() => {
    const intervalID = setInterval(createElement, createTimeInterval);
    return () => clearInterval(intervalID);
  }, [createElement, createTimeInterval]);

  return <Canvus ref={canvasRef} />;
};

export default DroppingBackground;
