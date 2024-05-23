export default function Cart() {
  let 장바구니 = ["Tomatoes", "Pasta"];

  return (
    <>
      <h4 className="title">Cart</h4>
      {장바구니.map((v, i) => {
        return <CartItem name={v} key={i} />;
      })}
      <Btn color="blue" />
      <Btn color="red" />
    </>
  );
}

function CartItem({ name }) {
  return (
    <div className="cart-item">
      <p>{name}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Btn({ color }) {
  return <button style={{ background: color }}>Button</button>;
}
