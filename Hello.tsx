import React from 'react';
import { Line } from '@nivo/line';
import { random } from 'faker';

const random0to60 = () => random.number({ min: 0, max: 60 });
const generateData = (num = 12) => {
  return [...Array(4)].map((_, i) => ({
    id: `data${i + 1}`,
    data: [...Array(num)].map((_, j) => ({ x: `${j + 1}`, y: random0to60() })),
  }));
};
const generateDacta = (num = 12) => {
  return [
    {
      id: 'data1',
      data: [...Array(num)]
        .fill(1)
        .map((_, j) => {
          return { x: `${j+1}`, y: random0to60() }
        })
    }
  ];
}


export const Hello = () => {
  return (<Line
    width={900}
    height={400}
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
    data={generateDacta()}
  />)
};
