// import Table from "../components/Table";
import SortableTable from "../components/SortableTable";

function TablePage() {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
      type: "Citrus",
      price: 1.25,
    },
    {
      name: "Apple",
      color: "bg-red-300",
      score: 3,
      type: "Pome Fruit",
      price: 0.75,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 1,
      type: "Tropical",
      price: 0.5,
    },
    {
      name: "Lime",
      color: "bg-green-500",
      score: 4,
      type: "Citrus",
      price: 0.85,
    },
    {
      name: "Strawberry",
      color: "bg-pink-400",
      score: 2,
      type: "Berry",
      price: 0.3,
    },
    {
      name: "Blueberry",
      color: "bg-blue-600",
      score: 5,
      type: "Berry",
      price: 0.45,
    },
    {
      name: "Grape",
      color: "bg-purple-500",
      score: 4,
      type: "Berry",
      price: 0.6,
    },
    {
      name: "Cherry",
      color: "bg-red-600",
      score: 3,
      type: "Stone Fruit",
      price: 0.8,
    },
    {
      name: "Pineapple",
      color: "bg-yellow-600",
      score: 2,
      type: "Tropical",
      price: 2.5,
    },
    {
      name: "Mango",
      color: "bg-yellow-400",
      score: 4,
      type: "Tropical",
      price: 1.75,
    },
    {
      name: "Watermelon",
      color: "bg-green-600",
      score: 3,
      type: "Melon",
      price: 3.0,
    },
    {
      name: "Peach",
      color: "bg-orange-400",
      score: 5,
      type: "Stone Fruit",
      price: 0.9,
    },
    {
      name: "Kiwi",
      color: "bg-green-400",
      score: 3,
      type: "Tropical",
      price: 1.1,
    },
    {
      name: "Coconut",
      color: "bg-green-500",
      score: 2,
      type: "Tropical",
      price: 2.25,
    },
    {
      name: "Raspberry",
      color: "bg-pink-600",
      score: 4,
      type: "Berry",
      price: 0.55,
    },
    {
      name: "Blackberry",
      color: "bg-purple-600",
      score: 3,
      type: "Berry",
      price: 0.75,
    },
    {
      name: "Pear",
      color: "bg-yellow-300",
      score: 2,
      type: "Pome Fruit",
      price: 0.8,
    },
    {
      name: "Cantaloupe",
      color: "bg-orange-600",
      score: 4,
      type: "Melon",
      price: 2.2,
    },
    {
      name: "Apricot",
      color: "bg-orange-300",
      score: 3,
      type: "Stone Fruit",
      price: 1.0,
    },
    {
      name: "Plum",
      color: "bg-purple-400",
      score: 5,
      type: "Stone Fruit",
      price: 0.95,
    },
  ];

  const config = [
    {
      label: "Name",
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-2 m-3 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: "Type",
      render: (fruit) => fruit.type || "N/A",
      sortValue: (fruit) => fruit.type || "",
    },
    {
      label: "Price",
      render: (fruit) => `$${fruit.price.toFixed(2)}`,
      sortValue: (fruit) => fruit.price,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
