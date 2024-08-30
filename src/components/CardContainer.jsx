import PlayerCard from "./PlayerCard";
import {data} from "../helper/data"

const CardContainer = ({ nbaplayers,search }) => {
    const filteredPlayers= data.filter((player) =>
        player.name.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <div className="containerAll my-4 p-2">
      <div className="cardRow my-2" >
        {filteredPlayers.map((item) => (
          <PlayerCard players={filteredPlayers} key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
