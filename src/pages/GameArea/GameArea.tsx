
import { CharacterScreen } from "../../component/CharacterScreen/CharacterScreen";

export function GameArea() {
    return (
        <div className="game-area">
            <CharacterScreen CharacterName={"Player"} />
            <CharacterScreen CharacterName={"NPC"} />
        </div>
        
    );
}