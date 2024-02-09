import { Header } from "../component/Header/Header";
import { GameArea } from "../pages/GameArea/GameArea";
import { Playground } from "../pages/Playground/Playground";

export function Root() {
    return (
      <>
        <Header />
        <GameArea />
        <Playground />
      </>
    );
  }
