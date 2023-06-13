import { memo, SVGProps } from 'react';

const ParkingSpace9Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 95 203' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H95V203H0V0Z' fill='#D9D9D9' stroke='white' strokeWidth={7} />
  </svg>
);

const Memo = memo(ParkingSpace9Icon);
export { Memo as ParkingSpace9Icon };
