import React from "react";
import { useNavigate } from "react-router-dom";

export default function Goods({ data }) {
  let navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => {
          navigate(`/detail/${data.id}`);
        }}
        className="col-md-4"
      >
        <img
          src={`https://codingapple1.github.io/shop/shoes${data.id + 1}.jpg`}
          width="80%"
          alt={`신발사진${data.id + 1}`}
        />
        <h4>{data.title}</h4>
        <p>{data.price}</p>
      </div>
    </>
  );
}
