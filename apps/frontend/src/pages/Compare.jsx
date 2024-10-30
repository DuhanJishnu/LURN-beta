import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Compare = () => {
  const location = useLocation();
  const CompareData = location.state.data;
  const [items, setItems] = useState(CompareData);
  const [droppedItems, setDroppedItems] = useState({});

  // Extract unique categories
  const categories = [...new Set(CompareData.map((item) => item.category))];

  // Handle drag start
  const onDragStart = (e, item) => {
    e.dataTransfer.setData("item", JSON.stringify(item));
  };

  // Handle drop
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
    <div className="main bg-black h-screen text-stone-50 p-4">
      {/* Top draggable items */}
      <div className="flex flex-wrap place-items-center mb-8">
        {items.map((item) => (
          <div className="p-2 inline-block" key={item.value}>
            <div
              draggable
              onDragStart={(e) => onDragStart(e, item)}
              className="w-fit px-4 py-2 bg-stone-500 inline-block items-center justify-center cursor-pointer rounded"
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic category drop areas */}
      <div className="flex space-x-4">
        {categories.map((category) => (
          <div
            key={category}
            onDrop={(e) => onDrop(e, category)}
            onDragOver={(e) => e.preventDefault()}
            className="flex-auto h-fit bg-stone-700 flex flex-col items-center p-4 rounded"
          >
            <h2 className="text-2xl font-bold mb-8">{category}</h2>
            <div className="grid gap-2 justify-items-center">
              {(droppedItems[category] || []).map((item) => (
                <div key={item.value} className="w-fit px-4 py-2 bg-stone-300 rounded">
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