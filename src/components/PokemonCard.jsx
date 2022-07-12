import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { setFavorite } from "../actions";
import "./PokemonList.css";
import StarButton from "./StarButton";
import {useDispatch} from "react-redux";

const PokemonCard = ({ name, height, weight, img, types, id }) => {
  const dispatch = useDispatch();
  const handleFavorite = () => {
    dispatch(setFavorite(id));
  };
  return (
    <Card
      title={name}
      cover={<img src={img} alt={name} />}
      extra={<StarButton onClick={handleFavorite} />}
    >
      <Meta description={"Weight = " + weight} />
      <Meta description={"Height = " + height} />
      <Meta description={"Types = " + types.map((type) => type.type.name)} />
    </Card>
  );
};

export default PokemonCard;
