import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame1.module.css';
import { ParkingSpace9Icon } from './ParkingSpace9Icon';

interface Props {
  className?: string;
}
/* @figmaId 1:46 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.parkingLot}></div>
      <div className={classes.parkingSpace1}></div>
      <div className={classes.parkingSpace2}></div>
      <div className={classes.parkingSpace3}></div>
      <div className={classes.parkingSpace4}></div>
      <div className={classes.parkingSpace5}></div>
      <div className={classes.parkingSpace6}></div>
      <div className={classes.parkingSpace7}></div>
      <div className={classes.parkingSpace8}></div>
      <div className={classes.parkingSpace9}>
        <ParkingSpace9Icon className={classes.icon} />
      </div>
      <div className={classes.parkingSpace10}></div>
      <div className={classes.parkingSpace11}></div>
      <div className={classes.parkingSpace12}></div>
      <div className={classes.parkingSpace13}></div>
      <div className={classes.parkingSpace14}></div>
      <div className={classes.parkingSpace15}></div>
      <div className={classes.parkingSpace16}></div>
      <div className={classes.parkingSpace17}></div>
      <div className={classes.line4}></div>
      <div className={classes.line3}></div>
      <div className={classes.line2}></div>
      <div className={classes.line1}></div>
      <div className={classes.greenBelt2}></div>
      <div className={classes.greenBelt1}></div>
      <div className={classes._1}>1</div>
      <div className={classes._2}>2</div>
      <div className={classes._3}>3</div>
      <div className={classes._4}>4</div>
      <div className={classes._5}>5</div>
      <div className={classes._6}>6</div>
      <div className={classes._7}>7</div>
      <div className={classes._8}>8</div>
      <div className={classes._9}>9</div>
      <div className={classes._10}>10</div>
      <div className={classes._11}>11</div>
      <div className={classes._12}>12</div>
      <div className={classes._13}>13</div>
      <div className={classes._14}>14</div>
      <div className={classes._15}>15</div>
      <div className={classes._16}>16</div>
      <div className={classes._17}>17</div>
    </div>
  );
});
