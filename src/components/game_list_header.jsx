export default () => {
  return (
    <div className="w-full">
      <div className="flex p-4 items-center">
        <button className="bg-custom-color text-sm font-bold rounded-3xl p-3">
          Фильтр
        </button>
        <p className="ml-5 mr-2">Категории</p>
        <i className="pi pi-angle-down"></i>
        <p className="ml-5 mr-2">Провайдеры</p>
        <i className="pi pi-angle-down"></i>
      </div>
    </div>
  );
};
