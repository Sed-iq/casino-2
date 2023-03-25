import logo from "./../assets/logo.svg";
import icon_1 from "./../assets/icon_1.svg";
import icon_2 from "./../assets/icon_2.svg";
import icon_3 from "./../assets/icon_3.svg";
import icon_4 from "./../assets/icon_4.svg";
import icon_5 from "./../assets/icon_5.svg";
import icon_6 from "./../assets/icon_6.svg";
import icon_7 from "./../assets/icon_7.svg";
import icon_8 from "./../assets/icon_8.svg";
import icon_9 from "./../assets/icon_9.svg";
import icon_10 from "./../assets/icon_10.svg";
import icon_11 from "./../assets/icon_11.svg";
import icon_12 from "./../assets/icon_12.svg";
import icon_13 from "./../assets/icon_13.svg";
export default () => {
  return (
    <div
      id="side_bar_items"
      className="bg-custom-color-4 flex text-sm flex-col items-center h-full"
    >
      <div className="my-3">
        <img srcSet={logo} alt="" />
      </div>
      <div className="mt-10 mb-4">
        <img srcset={icon_1} />
      </div>
      <div className=" my-4">
        <img srcset={icon_2} />
      </div>{" "}
      <div className=" my-4">
        <img srcset={icon_3} />
      </div>{" "}
      <div className=" my-4">
        <img srcset={icon_4} />
      </div>{" "}
      <div className=" my-4">
        <img srcset={icon_5} />
      </div>
      <div className=" my-4">
        <img srcset={icon_6} />
      </div>
      <div className=" my-4">
        <img srcset={icon_7} />
      </div>
      <div className="mt-10 mb-4 w-1/2v">
        <img srcset={icon_8} />
      </div>
      <div className=" my-4 w-1/2">
        <img srcset={icon_9} />
      </div>
      <div className=" my-4 w-1/2">
        <img srcset={icon_10} className="w-full" />
      </div>
      <div className=" my-4 w-1/2">
        <img srcset={icon_11} className="w-full" />
      </div>
      <div className=" my-4 w-1/2">
        <img srcset={icon_12} className="w-full" />
      </div>
      <div className=" my-4 w-1/2">
        <img srcset={icon_13} className=" mt-6" />
      </div>
    </div>
  );
};
