import React from 'react';
import { Icon, IconType } from '../icons/icon';
import './location-stat.css';

export const LocationStat = ({
  icon,
  value,
}: {
  icon: IconType;
  value: string | number;
}) => {
  return (
    <div className="location-stat">
      <span className="location-stat__icon" role="presentation">
        <Icon icon={icon} />
      </span>
      {value}
    </div>
  );
};
