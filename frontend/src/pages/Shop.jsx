import { useContext, useEffect, useState } from "react";
import { allProduct } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCartShopping,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import Path from "../components/Path";
import Service from "../components/Service";
import { ShopContext } from "../context/shopContext";

const Collection = () => {
  const [search, showSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [color, setColor] = useState([]);
  const [material, setMatiral] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  const {currency,onlySection} = useContext(ShopContext)

  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleColor = (e) => {
    if (color.includes(e.target.value)) {
      setColor((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setColor((prev) => [...prev, e.target.value]);
    }
  };
  const toggleMaterial = (e) => {
    if (material.includes(e.target.value)) {
      setMatiral((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setMatiral((prev) => [...prev, e.target.value]);
    }
  };
  const toggleAvailability = (e) => {
    if (availability.includes(e.target.value)) {
      setAvailability((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setAvailability((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = allProduct.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (color.length > 0) {
      productsCopy = productsCopy.filter((item) => color.includes(item.color));
    }
    if (material.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        material.includes(item.material)
      );
    }
    if (availability.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        availability.includes(item.availability)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.offerPrice - b.offerPrice));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.offerPrice - a.offerPrice));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [allProduct, category, material, color, availability, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <>
      <Path path1="Shop" path2="Home" path3="Shop" />
      <div className="flex px-3 flex-col sm:flex-row gap-1 sm:gap-10 py-10">
        {/* Filter Options */}
        <div className="min-w-60">
          <p
            onClick={() => setShowFilter(!showFilter)}
            className="my-2 text-xl flex items-center cursor-pointer gap-2"
          >
            FILTERS
            <FontAwesomeIcon icon={faAngleRight} />
          </p>
          {/* Category Filter */}
          <div
            className={`border rounded-2xl border-gray-300 pl-5 py-3 mt-4 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-1 text-sm font-medium">CATEGORIES</p>
            <div className="flex flex-col text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  className="w-3"
                  type="checkbox"
                  value={"Bedroom"}
                />{" "}
                Bedroom
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  className="w-3"
                  type="checkbox"
                  value={"Living Room"}
                />{" "}
                Living Room
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  className="w-3"
                  type="checkbox"
                  value={"Office"}
                />{" "}
                Office
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  className="w-3"
                  type="checkbox"
                  value={"Lighting"}
                />{" "}
                Lighting
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  className="w-3"
                  type="checkbox"
                  value={"Kitchen"}
                />{" "}
                Kitchen
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  className="w-3"
                  type="checkbox"
                  value={"Outdoor"}
                />{" "}
                Outdoor
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleCategory}
                  className="w-3"
                  type="checkbox"
                  value={"Decor"}
                />{" "}
                Decor
              </p>
            </div>
          </div>
          {/* color Filter */}
          <div
            className={`border rounded-2xl border-gray-300 pl-5 py-3 my-2 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-1 text-sm font-medium">Color</p>
            <div className="flex flex-col text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleColor}
                  className="w-3"
                  type="checkbox"
                  value={"Brown"}
                />{" "}
                Brown
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleColor}
                  className="w-3"
                  type="checkbox"
                  value={"Gray"}
                />{" "}
                Gray
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleColor}
                  className="w-3"
                  type="checkbox"
                  value={"Black"}
                />{" "}
                Black
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleColor}
                  className="w-3"
                  type="checkbox"
                  value={"Green"}
                />{" "}
                Green
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleColor}
                  className="w-3"
                  type="checkbox"
                  value={"Red"}
                />{" "}
                Red
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleColor}
                  className="w-3"
                  type="checkbox"
                  value={"Orange"}
                />{" "}
                Orange
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleColor}
                  className="w-3"
                  type="checkbox"
                  value={"Blue"}
                />{" "}
                Blue
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleColor}
                  className="w-3"
                  type="checkbox"
                  value={"White"}
                />{" "}
                White
              </p>
            </div>
          </div>
          {/* Color Filter */}
          {/* Material Filter */}
          <div
            className={`border rounded-2xl border-gray-300 pl-5 py-3 my-2 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-1 text-sm font-medium">Material</p>
            <div className="flex flex-col text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleMaterial}
                  className="w-3"
                  type="checkbox"
                  value={"Metal"}
                />{" "}
                Metal
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleMaterial}
                  className="w-3"
                  type="checkbox"
                  value={"Wood"}
                />{" "}
                Wood
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleMaterial}
                  className="w-3"
                  type="checkbox"
                  value={"Uphoistered"}
                />{" "}
                Uphoistered
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleMaterial}
                  className="w-3"
                  type="checkbox"
                  value={"Glass"}
                />{" "}
                Glass
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleMaterial}
                  className="w-3"
                  type="checkbox"
                  value={"Plastic"}
                />{" "}
                Plastic
              </p>
            </div>
          </div>
          {/* Material Filter */}
          {/* Availability Filter */}
          <div
            className={`border rounded-2xl border-gray-300 pl-5 py-3 my-2 ${
              showFilter ? "" : "hidden"
            } sm:block`}
          >
            <p className="mb-1 text-sm font-medium">Availability</p>
            <div className="flex flex-col text-sm font-light text-gray-700">
              <p className="flex gap-2">
                <input
                  onChange={toggleAvailability}
                  className="w-3"
                  type="checkbox"
                  value={"In Stock"}
                />{" "}
                In Stock
              </p>
              <p className="flex gap-2">
                <input
                  onChange={toggleAvailability}
                  className="w-3"
                  type="checkbox"
                  value={"Out of Stock"}
                />{" "}
                Out of Stock
              </p>
            </div>
          </div>
          {/* Availability Filter */}
        </div>
        {/* Right Side */}
        <div className="flex-1">
          <div className="flex justify-between text-base sm:text-2xl mb-4">
            {/* Product sort */}
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="border-2 border-gray-300 text-sm px-2"
            >
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low-High</option>
              <option value="high-low">Sort by: High-Low</option>
            </select>
          </div>
          {/* Map product */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-4">
            {currentProducts.map((item, index) => (
              <div
                key={index}
                className="border flex flex-col justify-center rounded-2xl p-2 h-[45vh] md:h-[60vh] md:w-[17vw] w-[45vw] hover:scale-101 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-full h-full relative rounded-2xl bg-no-repeat bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <p className="py-1 px-1.5 bg-[#224A26] top-1 left-1 text-white absolute rounded-full">
                    {item.offer}%
                  </p>
                  <button className="border absolute right-1 top-1 rounded-full p-1 w-20 md:w-15 bg-gray-200 font-medium">
                    Add
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="text-xs"
                    />
                  </button>
                  <FontAwesomeIcon
                    icon={fasHeart}
                    className="text-xl absolute right-3 bottom-2 text-red-500"
                  />
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-800">{item.name}</p>
                  <p className="font-medium flex items-center">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-yellow-500 pr-1 text-xs"
                    />
                    {item.rating}
                  </p>
                </div>
                <div>
                  <p className="font-medium">{item.title}</p>
                  <div className="flex gap-3">
                    <p className="font-medium">{currency}{item.offerPrice}{onlySection}</p>
                    <del className="text-gray-500">{currency}{item.price}{onlySection}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              className="px-4 py-2 border rounded"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            <span className="text-sm font-medium text-gray-700">
              Page {currentPage} of{" "}
              {Math.ceil(filterProducts.length / productsPerPage)}
            </span>

            <button
              className="px-4 py-2 border rounded"
              onClick={() =>
                setCurrentPage((prev) =>
                  prev < Math.ceil(filterProducts.length / productsPerPage)
                    ? prev + 1
                    : prev
                )
              }
              disabled={
                currentPage ===
                Math.ceil(filterProducts.length / productsPerPage)
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="p-2 md:max-w-[80%] mx-auto">
        <Service />
      </div>
    </>
  );
};

export default Collection;
