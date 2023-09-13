import React from 'react';
import { UsersIcon } from './users-icon';
import { CloseIcon } from './close-icon';
import { TimezoneIcon } from './timezone-icon';
import { EditIcon } from './edit-icon';
import { ViewsIcon } from './views-icon';

export type IconType = 'users' | 'close' | 'timezone' | 'edit' | 'views';

const icons: { [key in IconType]: React.ReactNode } = {
  users: <UsersIcon />,
  close: <CloseIcon />,
  timezone: <TimezoneIcon />,
  edit: <EditIcon />,
  views: <ViewsIcon />,
};

export const Icon = ({ icon }: { icon: IconType }) => {
  return icons[icon];
};
