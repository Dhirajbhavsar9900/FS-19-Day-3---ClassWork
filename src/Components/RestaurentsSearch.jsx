function RestaurentsSearch() {
  return (
    <div className="flex gap-5 justify-around m-5 items-center">
      <div>
        <input
          type="text"
          className=" border-blue-600 rounded-lg outline-none border-[1px] p-2 "
          placeholder="Search Restaurents"
        />
      </div>
      <div>
        <span className="p-2">Minimum Rating :</span>
        <input
          type="number"
          className="w-20 p-2 border-blue-600 rounded-lg outline-none border-[1px]  "
        />
      </div>
    </div>
  );
}

export default RestaurentsSearch;
