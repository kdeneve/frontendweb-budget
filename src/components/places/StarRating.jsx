// src/components/places/StarRating.jsx
import { IoStarSharp } from "react-icons/io5";

const Star = ({ index, selected = false, onSelect = (f) => f }) => {
  const handleSelect = (e) => {
    onSelect(index + 1);
    console.log(e);
  };

  return (
    <IoStarSharp color={selected ? "orange" : "grey"} onClick={handleSelect} />
  );
};

export default function StarRating({
  totalStars = 6,
  selectedStars = 0,
  onRate, // 👈 3
}) {
  //const [rating, setRating] = useState(selectedStars); // 👈 1

  return (
    <>
      {[...new Array(totalStars)].map((nomatterwhat, i) => (
        <Star
          key={i}
          index={i}
          selected={selectedStars > i}
          onSelect={onRate}
        />
      ))}
      {/* 👆 2 en 4 */}
      <p>
        {selectedStars} of {totalStars} stars {/* 👈 2 */}
      </p>
    </>
  );
}
