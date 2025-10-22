import React from "react";

export default function DetailPage({ item, imageUrl, fields = [] }) {
  if (!item)
    return (
      <div className="container mt-5">
        <p>Not found</p>
      </div>
    );

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={imageUrl}
            alt={`${item.properties?.name ?? "item"} image`}
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="col-md-7 text-black">
          <h2>{item.properties?.name}</h2>
          {fields.map((field) => (
            <p key={field}>
              <strong>{field.replace(/_/g, " ")}:</strong>{" "}
              {item.properties?.[field]}
            </p>
          ))}
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}
