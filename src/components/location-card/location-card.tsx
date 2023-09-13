import React from 'react';
import { ViewedLocation } from '../../types';
import './location-card.css';
import { Icon } from '../icons/icon';
import { LocationStat } from '../location-stat/location-stat';

export const LocationCard = ({
  id,
  name,
  userCount,
  createdAt,
  viewCount,
  onClick,
}: ViewedLocation & { onClick: (id: string) => void }) => {
  return (
    <div role="button" className="location-card" onClick={() => onClick(id)}>
      <div className="location-card__name">{name}</div>
      <LocationStat icon="users" value={`${userCount} Users`} />
      <LocationStat icon="timezone" value={createdAt} />
      <LocationStat icon="views" value={`${viewCount} Views`} />
      <div className="location-card-edit">
        <Icon icon="edit" />
      </div>
    </div>
  );
};
