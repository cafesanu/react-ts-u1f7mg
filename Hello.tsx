import React, {useState} from 'react';
import { Line } from '@nivo/line';
import { random } from 'faker';

const random0to60 = () => random.number({ min: 0, max: 60 });

const generateData = (num = 12) => {
  return [...Array(4)].fill(1).map((_, i) => ({
    id: `data${i + 1}`,
    data: [...Array(num)].map((_, j) => ({ x: `${j + 1}`, y: random0to60() })),
  }));
};
const generateDacta = (num = 12) => {
  const points = [...Array(num)]
        .fill(1)
        .map(random0to60)
  return [...Array(4)]
    .fill(1)
    .map((_, i) => ({
      id: `data${i + 1}`,
      data: [...Array(num)]
        .fill(1)
        .map((_, j) => {
          return { x: `${j+1}`, y: points[j] * random0to60()}
        })
    }));
}


export const Hello = () => {
  const [data, setData] = useState(generateDacta());
  const [stacked, setStacked] = useState(false);

  return (
    <div>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => {
          setStacked((val) => !val);
        }}
      >
        Stacked? ({stacked ? "true": "false"})
      </button>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => {
          setData(generateDacta(12));
        }}
      >
        12 points (for months)
      </button>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => {
          setData(generateDacta(24));
        }}
      >
        24 points (for day)
      </button>
      <button
        style={{ marginRight: '5px' }}
        onClick={() => {
          setData(generateDacta(31));
        }}
      >
        31 points (for month)
      </button>
      <Line
        width={900}
        height={400}
        margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        data={data}
        colors={['#45227B', '#6E36C5', '#8A43F6', '#A06DEE']}
        enableSlices="x"
        enableArea={true}
        yScale={{
          type: 'linear',
          stacked: stacked,
        }}
        areaOpacity={1}
      />
    </div>
  )
};
