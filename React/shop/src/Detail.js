import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Context1 } from "./App.js";
import { addCart } from "./store.js";
import { useDispatch, useSelector } from "react-redux";

export default function Detail({ shoes }) {
  let { id } = useParams();
  let shoeObj = shoes.find((v) => v.id === parseInt(id));
  let [count, setCount] = useState(0);
  let [state, setState] = useState(true);
  let [text, setText] = useState("");
  let [warning, setWarning] = useState(true);
  let [tab, setTab] = useState(0);
  let [fade2, setFade2] = useState("");
  let { 재고 } = useContext(Context1);
  let dispatch = useDispatch();

  let data = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    let lastGoods = JSON.parse(localStorage.getItem("watched"));
    if (!lastGoods.includes(id)) lastGoods.push(id);
    localStorage.setItem("watched", JSON.stringify(lastGoods));
  }, []);

  console.log(data);
  // 마운트,업데이트시 코드 실행(useEffect)
  // 렌더링이 다 되고 나서 실행됨
  // HTML을 먼저 보여준 후 실행됨
  // []는 실행조건을 넣을 수 있음
  // 첫 마운트에만 실행하고 싶으면 []
  // return을 사용하면 useEffect 동작 전에 실행
  // clean up function(return)은 mount시 실행 안됨 unmount시 실행됨
  useEffect(() => {
    let timer = setTimeout(() => {
      setState(false);
    }, 2000);
    //timer같은 것들 삭제
    return () => {
      clearTimeout(timer);
    };
  });
  //   useEffect(() => {}); //재랜더링마다 코드실행하고 싶으면
  //   useEffect(() => {}, []); //mount시 1회 코드실행하고 싶으면
  //   //unmount시 1회 코드실행하고 싶으면
  //   useEffect(() => {
  //     return () => {};
  //   }, []);
  //   useEffect(() => {}, [state명]); //특정 state 변경시에만 실행(state명)

  useEffect(() => {
    let regex = /^[0-9]*$/;
    if (!regex.test(text)) setWarning(false);
    else setWarning(true);
  }, [text]);

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  return (
    <div className={"container start " + fade2}>
      {state ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : (
        <></>
      )}
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              shoeObj.id + 1
            }.jpg`}
            width="100%"
            alt={`신발사진${shoeObj.id + 1}`}
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{shoeObj.title}</h4>
          <p>{shoeObj.content}</p>
          <p>{shoeObj.price}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              dispatch(
                addCart({ id: shoeObj.id, name: shoeObj.title, count: 1 })
              );
            }}
          >
            주문하기
          </button>
        </div>
      </div>
      <label>
        <input
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="수량을 입력하세요"
        />
      </label>
      {!warning ? <p>경고 : 숫자만 입력하세요</p> : <></>}
      {/* <Btn $bg="blue">버튼</Btn>
      <Btn $bg="orange">버튼</Btn> */}
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={shoes} />
    </div>
  );
}

function TabContent({ tab, shoes }) {
  let [fade, setFade] = useState("");

  //automatic batching 기능
  //state 변경한 함수들이 근처에 있으면 다 합쳐서 한번만 변경해줌
  useEffect(() => {
    let timer = setTimeout(() => {
      setFade("end");
    }, 10);

    return () => {
      clearTimeout(timer);
      setFade("");
    };
  }, [tab]);
  //   if (tab === 0) {
  //     return <div>내용0</div>;
  //   } else if (tab === 1) {
  //     return <div>내용1</div>;
  //   } else if (tab === 2) {
  //     return <div>내용2</div>;
  //   }
  return (
    <div className={"start " + fade}>
      {[<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
  );
}

let Btn = styled.button`
  background: ${(props) => props.$bg};
  color: ${(props) => (props.$bg === "blue" ? "white" : "black")};
  padding: 10px;
`;

// Context API 쓰면
// 단점1 : 성능이슈
// 단점2 : 컴포넌트 재활용 어렵
// state 변경시 쓸데없는 것까지 재렌더링
// 다른 페이지에서 import해서 재사용하려면 에러가 날수도 있음
