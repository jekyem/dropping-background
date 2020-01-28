import React from "react";
import styled from "styled-components";

interface PropsType {
  maxDiameter: number;
  minDiameter: number;
}

const RandomSnow = ({ maxDiameter, minDiameter }: PropsType) => {
  const diameter = Math.random() * (maxDiameter - minDiameter) + minDiameter;

  const Snow = styled.div`
    border: none;
    border-radius: 50%;
    background-color: white;
    width: ${diameter}px;
    height: ${diameter}px;
  `;

  return <Snow />;
};

export default RandomSnow;
