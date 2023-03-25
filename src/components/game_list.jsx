import mon from "./../assets/stock/mon.svg";
import lucky from "./../assets/stock/lucky.svg";
import gold from "./../assets/stock/gold.svg";
import drack from "./../assets/stock/drack.svg";
import vagas from "./../assets/stock/vagas.svg";
import zeus from "./../assets/stock/zeus.svg";
import fruit from "./../assets/stock/fruit.svg";
import $ from "jquery";
import { useState } from "react";
export default () => {
  return (
    <div id="games" className="px-4 flex flex-wrap justify-center p-2">
      <div
        id="cover"
        onMouseOver={(e) => _show(e.target)}
        className="mx-5  relative"
      >
        <img srcSet={mon} alt="" className="w-full" />
        <section
          onMouseOver={(e) => _show(e.target)}
          data-me="e"
          className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full"
        >
          <i className="pi pi-play"></i>
        </section>
      </div>
      <div className="mx-5 relative">
        <img srcSet={lucky} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>{" "}
      <div className="mx-5 relative">
        <img srcSet={gold} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>
      <div className="mx-5 relative">
        <img srcSet={drack} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>
      <div className="mx-5 relative">
        <img srcSet={vagas} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>
      <div className="mx-5 relative">
        <img srcSet={mon} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>
      <div className="mx-5 relative">
        <img srcSet={zeus} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>
      <div className="mx-5 relative">
        <img srcSet={fruit} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>
      <div className="mx-5 relative">
        <img srcSet={mon} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>
      <div className="mx-5 relative">
        <img srcSet={lucky} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>
      <div className="mx-5 relative">
        <img srcSet={gold} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>
      <div className="mx-5 relative">
        <img srcSet={drack} alt="" className="w-full" />

        <section className=" play h-full bg-gray-800 opacity-75 flex justify-center items-center absolute top-0 w-full">
          <i className="pi pi-play"></i>
        </section>
      </div>
    </div>
  );
};

function _show(element) {
  const play = document.querySelectorAll(".play");
  const play_container = document.querySelectorAll("#cover");
  console.log(element);
}
