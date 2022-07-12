import { Card } from "antd";
import { useDispatch } from "react-redux";
import Meta from "antd/lib/card/Meta";
import StarButton from "./StarButton";
import { setFavorite } from "../slices/dataSlice";
import "./PokemonList.css";

const PokemonCard = ({ name, image, types, id, favorite, height, weight }) => {
  const dispatch = useDispatch();

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  };

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={"Weight = " + weight} />
      <Meta description={"Height = " + height} />
      <Meta description={"Types = " + types.map((type) => type.type.name)} />
    </Card>
  );
};

export default PokemonCard;
