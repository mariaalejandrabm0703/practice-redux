import { Input } from "antd";

const Searcher = ({ setName }) => {
  return (
    <Input.Search
      placeholder="Buscar..."
      style={{ marginBottom: 10 }}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default Searcher;
