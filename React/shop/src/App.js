import { Nav, Navbar } from "react-bootstrap";
import "./style.css";
import { lazy, Suspense, createContext, useEffect, useState } from "react";
import data from "./data.js";
import Goods from "./components/Goods.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
// import Detail from "./Detail.js";
// import Cart from "./Cart.js";
const Detail = lazy(() => import("./Detail.js"));
const Cart = lazy(() => import("./Cart.js"));

//보관함
export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [click, setClick] = useState(2);
  let [재고] = useState([10, 11, 12]);

  let result = useQuery(
    "작명",
    () =>
      axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
        console.log("hi");
        return a.data;
      }),
    // refetch 시간도 설정할 수 있음
    { staleTime: 2000 }
  );
  console.log(result);
  // result.data; //요청이 성공했을때 가져오는 data
  // result.isLoading; //로딩이 요청중일 때 true
  // result.error; // 요청이 실패했을 때 true

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify([]));
    console.log("app");
  }, []);

  const addShoes = function () {
    // 로딩중UI 띄우기
    axios
      .get(`https://codingapple1.github.io/shop/data${click}.json`)
      .then((data) => {
        setShoes([...shoes, ...data.data]);
      })
      .catch((error) => {
        console.log(error);
      });
    // 서버로 데이터전송하는 POST요청
    // axios.post("/alsndl", { name: "kim" });
    // 동시에 ajax 요청 여러개 할때
    // Promise.all([axios.get("/url1"), axios.get("/url2")]).then((결과) => {});
    //fetch 사용시 JSON 형태로 변환하는 과정이 필요하다
    // fetch("http~").then(결과=>결과.json()).then(data=>{})
    // axios는 안해도됨
    setClick(click + 1);
    // 로딩중UI 숨기기
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className="navbar">
        <Navbar.Brand href="#home">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </Nav.Link>
          {/* <Link to="/">Home</Link>
          <Link to="/detail">상세페이지</Link> */}
        </Nav>
        <Nav className="ms-auto loading">
          {/* {result.isLoading ? "로딩중" : result.data.name} */}
          {result.isLoading && "로딩중"}
          {result.error && "에러남"}
          {result.data && result.data.name}
        </Nav>
      </Navbar>
      <Suspense fallback={<div>로딩중</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-bg"></div>
                <div className="container">
                  <div className="row">
                    {shoes.map((v, i) => {
                      return <Goods key={i} data={v} />;
                    })}
                  </div>
                </div>
                {click <= 3 ? <button onClick={addShoes}>버튼</button> : <></>}
              </>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <Context1.Provider value={{ 재고 }}>
                <Detail shoes={shoes} />
              </Context1.Provider>
            }
          />
          <Route path="/event" element={<Event />}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
            <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </>
  );
}
function Event() {
  return (
    <>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </>
  );
}

export default App;
