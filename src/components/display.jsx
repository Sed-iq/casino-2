import Cup from "./../assets/cup.svg";
import spacewalk from "./../assets/spacewalk.svg";
import startdust from "./../assets/stardust.svg";
import arms from "./../assets/arms.svg";
import dark_skies from "./../assets/dark_skies.svg";
import Book_of_amon from "./../assets/book_of_amon.svg";
import living from "./../assets/living.svg";
export default () => {
  return (
    <div id="display" className="flex flex-col items-center justify-between">
      <div
        id="display_text"
        className=" flex flex-col w-full  justify-start pl-10 h-4/5 "
      >
        <p className="text-gray-400 w-96 text-sm">
          пОЛУЧИТЕ НЕВЕРОЯТНО ПРИЯТНЫЙ БОНУС
        </p>
        <p className="text-3xl w-80 font-bold my-2">
          <span className="text-custom-2 font-bold">Получи 150%</span> бонус на
          первый депозит🔥
        </p>
        <div className="flex items-center mt-2">
          <button className="bg-custom-color text-sm rounded-3xl px-5 p-3">
            Регистрация 🎰
          </button>
          <p className="mx-8 ">Больше информации 🃏</p>
        </div>
      </div>
      <div
        id="showcase"
        className=" flex justify-evenly rounded bg-custom-color-2 h-16"
      >
        <div className="h-full flex items-center w-32">
          <img srcSet={Cup} alt="" className="w-10" />
          <p className="text-center mx-3 font-bold text-sm">ОНИ ПОБЕДИТЕЛИ!</p>
        </div>
        <div className="h-full flex   items-center ">
          <img srcSet={Book_of_amon} alt="" className="w-10" />
          <div className="h-full flex mb-2 flex-col">
            <p className=" mx-3 block mt-2 text-sm">BOOK OF AMON</p>
            <div className="flex mt-2 mx-3 text-sm items-center">
              <p className="mr-3">
                Nai<sup>**</sup>
              </p>
              <button className="bg-custom-color-3 text-custom font-bold rounded px-2 p-1 ">
                4000$
              </button>
            </div>
          </div>
        </div>

        <div className="h-full flex items-center ">
          <img srcSet={spacewalk} alt="" className="w-10" />
          <div className="h-full flex mb-2 flex-col">
            <p className=" mx-3 block mt-2 text-sm">SPACEWALK II:Ze..</p>
            <div className="flex mt-2 mx-3 text-sm items-center">
              <p className="mr-3">
                Nai<sup>**</sup>
              </p>
              <button className="bg-custom-color-3 text-custom font-bold rounded px-2 p-1 ">
                4000$
              </button>
            </div>
          </div>
        </div>

        <div className="h-full flex items-center ">
          <img srcSet={startdust} alt="" className="w-10" />
          <div className="h-full flex mb-2 flex-col">
            <p className=" mx-3 block mt-2 text-sm">SPACEWALK II:Ze..</p>
            <div className="flex mt-2 mx-3 text-sm items-center">
              <p className="mr-3">
                Nai<sup>**</sup>
              </p>
              <button className="bg-custom-color-3 text-custom font-bold rounded px-2 p-1 ">
                4000$
              </button>
            </div>
          </div>
        </div>

        <div className="h-full flex items-center ">
          <img srcSet={arms} alt="" className="w-10" />
          <div className="h-full flex mb-2 flex-col">
            <p className=" mx-3 block mt-2 text-sm">ARMS</p>
            <div className="flex mt-2 mx-3 text-sm items-center">
              <p className="mr-3">
                Nai<sup>**</sup>
              </p>
              <button className="bg-custom-color-3 text-custom font-bold rounded px-2 p-1 ">
                4000$
              </button>
            </div>
          </div>
        </div>

        <div className="h-full flex items-center ">
          <img srcSet={dark_skies} alt="" className="w-10" />
          <div className="h-full flex mb-2 flex-col">
            <p className=" mx-3 block mt-2 text-sm">DARK SKIES</p>
            <div className="flex mt-2 mx-3 text-sm items-center">
              <p className="mr-3">
                Nai<sup>**</sup>
              </p>
              <button className="bg-custom-color-3 text-custom font-bold rounded px-2 p-1 ">
                4000$
              </button>
            </div>
          </div>
        </div>

        <div className="h-full flex items-center ">
          <img srcSet={living} alt="" className="w-10" />
          <div className="h-full flex mb-2 flex-col">
            <p className=" mx-3 block mt-2 text-sm">LIVING OUT...</p>
            <div className="flex mt-2 mx-3 text-sm items-center">
              <p className="mr-3">
                Nai<sup>**</sup>
              </p>
              <button className="bg-custom-color-3 text-custom font-bold rounded px-2 p-1 ">
                4000$
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
