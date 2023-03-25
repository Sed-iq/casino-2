import Search_icon from "./../assets/search_white.png";
export default () => {
  return (
    <div id="nav" className="w-full flex items-center px-5 flex-row">
      <div
        id="search_icon"
        className=" h-3/5 rounded-xl px-3 flex p-1 bg-custom-color"
      >
        <img srcSet={Search_icon} alt="search button" className="w-full" />
      </div>
      <div id="search_bar" className=" w-1/2  ml-10">
        <input
          type="text"
          placeholder="Поиск казино, игр и многого другого..."
          className="w-full outline-none text-sm text-white p-2 bg-transparent placeholder:text-gray-600 h-full"
        />
      </div>
      <div
        id="ending-right"
        className="flex h-full items-center justify-end w-1/2 "
      >
        <div className="flex items-center mx-8">
          <p className="font-bold text-sm mx-2">RU</p>
          <i className="pi pi-angle-down"></i>
        </div>
        <div className="flex item-center">
          <button className="bg-custom-color p-3 mx-2 rounded-xl text-sm">
            Войти 🎉
          </button>
          <button className="bg-custom-color mx-2 p-3 rounded-xl text-sm">
            Регистрация 🚀
          </button>
        </div>
      </div>
    </div>
  );
};
