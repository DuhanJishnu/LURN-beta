import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Compare = () => {
  const location = useLocation();
  const CompareData = location.state.data;
  const [items, setItems] = useState(CompareData);
  const [droppedItems, setDroppedItems] = useState({});

  const categories = [...new Set(CompareData.map((item) => item.category))];

  const onDragStart = (e, item) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
  };

  const onDrop = (e, targetCategory) => {
    const item = JSON.parse(e.dataTransfer.getData("item"));

    if (item.category === targetCategory) {
      setDroppedItems((prev) => ({
        ...prev,
        [targetCategory]: [...(prev[targetCategory] || []), item],
      }));

      setItems((prev) => prev.filter((i) => i.value !== item.value));
    }
  };

  return (
    <div className="wrapper pt-20 bg-black h-screen text-stone-50 p-4">
      <div className="flex flex-wrap place-items-center justify-center mb-8">
        {items.map((item) => (
          <div className="p-2 inline-block" key={item.value}>
            <div
              draggable
              onDragStart={(e) => onDragStart(e, item)}
              className="w-fit px-4 py-2 bg-[#420202] inline-block items-center justify-center cursor-pointer rounded-xl shadow-black shadow-lg"
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-4">
        {categories.map((category) => (
          <div
            key={category}
            onDrop={(e) => onDrop(e, category)}
            onDragOver={(e) => e.preventDefault()}
            className="flex-auto h-fit bg-[#001a3352] flex flex-col items-center p-4 shadow-black shadow-md rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-8">{category}</h2>
            <div className="grid gap-2 justify-items-center">
              {(droppedItems[category] || []).map((item) => (
                <div key={item.value} className="w-fit px-4 py-2 rounded-xl bg-[#023b0aea] shadow-black shadow-lg">
                  {item.value}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compare;
