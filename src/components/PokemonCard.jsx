import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css";

const PokemonCard = ({ name, height, weight, img, types }) => {
  console.log('types :>> ', types);
  return (
    <Card
      title={name}
      cover={<img src={img} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description={"Weight = " + weight} />
      <Meta description={"Height = " + height} />
      <Meta description={"Types = " + types.map(type => type.type.name)} />
    </Card>
  );
};

export default PokemonCard;
