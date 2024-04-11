import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function AccordionPage({itmes}) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (nextIndex) => {
    setExpandedIndex((curruntExpandedIndex) => {
      if (curruntExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = itmes.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div>{renderedItems}</div>;
}
export default AccordionPage;
