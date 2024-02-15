import React from "react";
import { Routes, Route, Link } from "react-router-dom";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>메인페이지</div>} />
        <Route path="/detail" element={<div>상세페이지</div>} />
      </Routes>
    </>
  );
}
