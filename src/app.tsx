import React from 'react';
import './app.css';
import { LocationCard } from './components/location-card/location-card';
import { Location, ViewedLocation } from './types';
import { LocationModal } from './components/location-modal/location-modal';

export const App = () => {
  const [locations, setLocations] = React.useState<ViewedLocation[]>([]);
  const [selectedCardId, setSelectedCardId] = React.useState<string>();

  const selectedLocation = React.useMemo<ViewedLocation>(() => {
    return locations.find((location) => location.id === selectedCardId)!;
  }, [selectedCardId]);

  const handleCardClick = React.useCallback((id: string) => {
    setLocations((locations) => {
      return locations.map((location) => {
        if (location.id === id) {
          return { ...location, viewCount: location.viewCount + 1 };
        } else {
          return location;
        }
      });
    });
    setSelectedCardId(id);
  }, []);

  const closeModal = React.useCallback(() => {
    setSelectedCardId(undefined);
  }, []);

  React.useEffect(() => {
    fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations')
      .then((response) => response.json())
      .then((locations) => {
        setLocations(
          locations.map((location: Location) => ({ ...location, viewCount: 0 }))
        );
      });
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <span className="app-header__label">All locations</span>
        <h1 className="app-header__title">Acme locations</h1>
      </header>
      <main className="app-main">
        <div className="app-cards">
          {locations.map((location) => (
            <div className="app-card" key={location.id}>
              <LocationCard {...location} onClick={handleCardClick} />
            </div>
          ))}
        </div>
      </main>
      {selectedCardId ? (
        <LocationModal
          {...selectedLocation}
          onClose={closeModal}
          onDone={closeModal}
        />
      ) : null}
    </div>
  );
};
