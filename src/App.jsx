import NavBar from "./components/navBar";
import Display from "./components/display";
import Game_list_header from "./components/game_list_header";
import Game_list from "./components/game_list";
import SideBar from "./components/sideBar";
export default () => {
  return (
    <div className="flex justify-between w-full">
      <div id="sidebar" className=" sticky top-0 h-screen flex flex-col ">
        <SideBar />
      </div>
      <div id="right" className="relative">
        <NavBar />
        <Display />
        <Game_list_header />
        <Game_list />
      </div>
    </div>
  );
};
