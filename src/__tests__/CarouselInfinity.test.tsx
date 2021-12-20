import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import CarouselInfinity from "../components/carousel/index";
import { test } from '@jest/globals';
import { CarouselInfinityModel } from "../components/carousel/model";

test('run component', () => {
  const textContent = "ny content test";
  const note: CarouselInfinityModel = {
    children: <div>{textContent}</div>
  };
  
  render(<CarouselInfinity>{note.children}</CarouselInfinity>);
})

test('check text', () => {
  const textContent = "Any content test";
  const note: CarouselInfinityModel = {
    children: <div>{textContent}</div>
  };

  const comp = render(<CarouselInfinity>{note.children}</CarouselInfinity>);

  comp.getByText(textContent);
})
