import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera, useGLTF } from "@react-three/drei/core";
import { Canvas } from "@react-three/fiber";
import ObjLoader from "../components/ObjLoader";
import "./FurnitureDetailPage.scss";
import React, { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { furnitureSlice } from "../redux/module/furnitureSlice";
import { useLocation } from "react-router-dom";

export default function FurnitureDetailPage() {
  const location = useLocation();
  const { title, price, filename } = location.state;
  const dispatch = useDispatch();
  const [backcolor, setBackColor] = useState([0.7, 0.7, 0.7]);
  const [lightcolor, setLightColor] = useState([1, 1, 1]);
  useEffect(() => {}, []);
  return (
    <section className="furnituredetailpage">
      <div className="product_wrap">
        <div className="product_img">
          <Canvas>
            <OrbitControls target={[0, 0.35, 0]} />
            <PerspectiveCamera makeDefault fov={20} position={[8, 8, 4]} />
            <pointLight position={[-10, -10, -10]} />
            <ambientLight intensity={0.8} />
            <spotLight
              position={[20, 15, 0]}
              angle={0.6}
              intensity={0.8}
              penumbra={0.5}
              color={lightcolor}
            />
            <color args={backcolor} attach="background" />
            <ObjLoader filename={filename} />
          </Canvas>
        </div>
        <div className="product_text">
          <h3 className="product_title">{title}</h3>
          <h4 className="product_price">{price}원</h4>
          <p className="product_explain"></p>
          <div>
            <div className="btn_gray_black">구매</div>
            <div
              className="btn_black_white"
              onClick={() => {
                dispatch(
                  furnitureSlice.actions.signFurniture({
                    title: title,
                    price: price,
                    filename: filename,
                  })
                );
                alert("장바구니에 담았습니다.");
              }}
            >
              장바구니 담기
            </div>
          </div>
        </div>
      </div>
      <section className="decorate">
        <div className="decorate_wrap">
          <p className="decorate_text">배경 색 변경</p>
          <div className="decorate_background">
            <li onClick={() => changeBack([1, 1, 1])}>
              <div className="decorate_white" />
              white
            </li>
            <li onClick={() => changeBack([0.5, 0.5, 0.5])}>
              <div className="decorate_grey" />
              grey
            </li>
            <li onClick={() => changeBack([0.1, 0.1, 0.1])}>
              <div className="decorate_black" />
              black
            </li>
            <li onClick={() => changeBack([0.9, 0.3, 0.3])}>
              <div className="decorate_pink" />
              pink
            </li>
            <li onClick={() => changeBack([0.7, 0.3, 0.1])}>
              <div className="decorate_orange" />
              orange
            </li>
            <li onClick={() => changeBack([0.2, 0.05, 0.2])}>
              <div className="decorate_purple" />
              purple
            </li>
            <li onClick={() => changeBack([0.3, 0.6, 1])}>
              <div className="decorate_skyblue" />
              skyblue
            </li>
            <li onClick={() => changeBack([0.1, 0.3, 1])}>
              <div className="decorate_blue" />
              blue
            </li>
          </div>
        </div>
        <div className="decorate_wrap">
          <p className="decorate_text">빛 색 변경</p>
          <div className="decorate_background">
            <li onClick={() => changeLight([1, 1, 1])}>
              <div className="decorate_white" />
              white
            </li>
            <li onClick={() => changeLight([0.5, 0.5, 0.5])}>
              <div className="decorate_grey" />
              grey
            </li>
            <li onClick={() => changeLight([0.1, 0.1, 0.1])}>
              <div className="decorate_black" />
              black
            </li>
            <li onClick={() => changeLight([0.9, 0.3, 0.3])}>
              <div className="decorate_pink" />
              pink
            </li>
            <li onClick={() => changeLight([0.7, 0.3, 0.1])}>
              <div className="decorate_orange" />
              orange
            </li>
            <li onClick={() => changeLight([0.2, 0.05, 0.2])}>
              <div className="decorate_purple" />
              purple
            </li>
            <li onClick={() => changeLight([0.3, 0.6, 1])}>
              <div className="decorate_skyblue" />
              skyblue
            </li>
            <li onClick={() => changeLight([0.1, 0.3, 1])}>
              <div className="decorate_blue" />
              blue
            </li>
          </div>
        </div>
      </section>
    </section>
  );
  function changeBack(light) {
    setBackColor(light);
  }
  function changeLight(light) {
    setLightColor(light);
  }
}
