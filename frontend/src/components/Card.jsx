import React, { useRef, useState, useEffect } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import { motion } from "framer-motion";
const Card = (props) => {
  const [qty, setqty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();

  let dispatch = useDispatchCart();
  let data = useCart();

  const handleCart = async () => {
    let food = [];

    for (const item of data) {
      if (item.id === props.fooditem._id) {
        food = item;
        break;
      }
    }

    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.fooditem._id,
          price: finalPrice,
          qty: qty,
        });
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.fooditem._id,
          name: props.fooditem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
      }
      return;
    }
    await dispatch({
      type: "ADD",
      id: props.fooditem._id,
      name: props.fooditem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  let options = props.options;
  let priceOptions = Object.keys(options);

  let finalPrice = qty * parseInt(options[size]);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  return (
    <motion.div className="card mt-3 " style={{ width: "18rem", maxHeight: "460px" }} initial = {{scale :0 , opacity: 0}}  transition={{
      delay:.2,
      duration:1,
      yoyo: Infinity,
      }} whileInView={{opacity:1,scale:1}}  >
      <img
        className="card-img-top"
        style={{ height: "13rem", objectFit: "fill" }}
        src="https://source.unsplash.com/random/900×900/?bedroom"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.fooditem.name}</h5>
        <p className="card-text"> {props.fooditem.description}</p>
        <div className="container w-100">
          <select
            name=""
            className="m-2 h-100  bg-danger rounded"
            id=""
            onChange={(e) => setqty(e.target.value)}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select
            name=""
            id=""
            className="m-2 h-100  bg-danger rounded"
            ref={priceRef}
            onChange={(e) => setSize(e.target.value)}
          >
            {priceOptions.map((data) => {
              return (
                <option key={data} value={data}>
                  {data}
                </option>
              );
            })}
          </select>

          <div className="d-inline h-100 fs-5">{finalPrice}</div>
        </div>
        <hr />
        <button
          className="btn btn-danger justify-content-center ms-2"
          onClick={handleCart}
        >
          {" "}
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
