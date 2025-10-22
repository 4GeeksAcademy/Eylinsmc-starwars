import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import DetailPage from "../components/DetailPage.jsx";

export default function Character() {
  const { id } = useParams();
  const { store } = useGlobalReducer();
  const character = (store.characters || []).find(
    (c) => String(c.uid) === String(id)
  );

  const imageUrl = `https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${id}.jpg`;

  return (
    <DetailPage
      item={character}
      imageUrl={imageUrl}
      fields={["gender", "height", "hair_color", "eye_color", "birth_year"]}
    />
  );
}
