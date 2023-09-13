import React from 'react';
import './location-modal.css';
import { ViewedLocation } from '../../types';
import { Icon } from '../icons/icon';
import { LocationStat } from '../location-stat/location-stat';

export const LocationModal = ({
  name,
  userCount,
  createdAt,
  viewCount,
  description,
  onDone,
  onClose,
}: ViewedLocation & { onDone: () => void; onClose: () => void }) => {
  return (
    <div className="location-modal">
      <div className="location-modal-content">
        <div className="location-modal-header">
          {name}
          <button className="location-modal__close" onClick={onClose}>
            <Icon icon="close" />
          </button>
        </div>
        <div className="location-modal-main">
          <LocationStat icon="users" value={`${userCount} Users`} />
          <LocationStat icon="timezone" value={createdAt} />
          <LocationStat icon="views" value={`${viewCount} Views`} />
          <div className="location-modal__label">Description</div>
          <p className="location-modal__desc">{description}</p>
          <button className="location-modal__done" onClick={onDone}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
