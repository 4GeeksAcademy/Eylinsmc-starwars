import React from "react";

export default function CardCarousel({ title, items, renderItem }) {
  const [index, setIndex] = React.useState(0);
  const itemsToShow = 4;
  const total = items?.length || 0;
  const visibleItems = items?.slice(index, index + itemsToShow) || [];

  const handlePrev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setIndex((prev) => (prev + itemsToShow >= total ? prev : prev + 1));

  if (!items?.length) return null;

  return (
    <div className="mt-5">
      <h1 className="tittles mt-3">{title}</h1>
      <div className="text-center mt-4">
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-secondary me-2" onClick={handlePrev} disabled={index === 0}>
            &#8592;
          </button>
          <div className="d-flex gap-3">
            {visibleItems.map((item, idx) => renderItem(item, index + idx))}
          </div>
          <button
            className="btn btn-secondary ms-2"
            onClick={handleNext}
            disabled={index + itemsToShow >= total}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
