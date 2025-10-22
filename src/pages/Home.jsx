import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CharacterCard from "../components/CharacterCard.jsx";
import PlanetCard from "../components/PlanetCard.jsx";
import VehicleCard from "../components/VehicleCard.jsx";
import CardCarousel from "../components/CardCarousel.jsx";

export const Home = () => {
  const { store } = useGlobalReducer();

  return (
    <div className="container">
      <CardCarousel
        title="Characters"
        items={store.characters || []}
        renderItem={(character, key) => (
          <CharacterCard key={key} character={character} />
        )}
      />

      <CardCarousel
        title="Planets"
        items={store.planets || []}
        renderItem={(planet, key) => <PlanetCard key={key} planet={planet} />}
      />

      <CardCarousel
        title="Vehicles"
        items={store.vehicles || []}
        renderItem={(vehicle, key) => (
          <VehicleCard key={key} vehicle={vehicle} />
        )}
      />
    </div>
  );
};
