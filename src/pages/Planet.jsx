import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Planet() {
  const { id } = useParams();
  const { store } = useGlobalReducer();

  // Buscar el planeta correspondiente
  const planet = (store.planets || []).find((p) => String(p.uid) === String(id));

  // Evitar errores si el planeta no se encuentra
  if (!planet || !planet.properties) {
    return (
      <div className="container mt-5 text-center text-danger">
        <h3>Planet not found</h3>
      </div>
    );
  }

  const imageUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/planets/${id}.jpg`;

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={imageUrl}
            alt={planet.properties.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>
        <div className="col-md-7 text-black">
          <h2 className="mb-3">{planet.properties.name}</h2>
          <p><strong>Climate:</strong> {planet.properties.climate}</p>
          <p><strong>Population:</strong> {planet.properties.population}</p>
          <p><stron
