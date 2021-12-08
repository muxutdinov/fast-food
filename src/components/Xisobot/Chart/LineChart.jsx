import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Dushanba',
    naqt: 4000,
    terminal: 2400,
    payme: 2400,
  },
  {
    name: 'Seshanba',
    naqt: 3000,
    terminal: 1398,
    payme: 2210,
  },
  {
    name: 'Chorshanba',
    naqt: 2000,
    terminal: 9800,
    payme: 2290,
  },
  {
    name: 'Payshanba',
    naqt: 2780,
    terminal: 3908,
    payme: 2000,
  },
  {
    name: 'Juma',
    naqt: 1890,
    terminal: 4800,
    payme: 2181,
  },
  {
    name: 'Shanba',
    naqt: 2390,
    terminal: 3800,
    payme: 2500,
  },
  {
    name: 'Yakshanba',
    naqt: 3490,
    terminal: 4300,
    payme: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="terminal" stroke="orange" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="naqt" stroke="green" />
          <Line type="monotone" dataKey="payme" stroke="#09ffde" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
