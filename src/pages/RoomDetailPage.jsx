import { useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei/core";
import { Canvas } from "@react-three/fiber";
import RoomLoader from "../components/RoomLoader";
import { firestore } from "../firebase";
import { query, getDocs } from "firebase/firestore";
import "./RoomDetailPage.scss";
import { useDispatch } from "react-redux";
import { roomSlice } from "../redux/module/roomSlice";
import { useLocation, useNavigate } from "react-router-dom";

export default function RoomDetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, content, price, filename, detailobj } = location.state;
  const dispatch = useDispatch();
  const [backcolor, setBackColor] = useState([0.7, 0.7, 0.7]);
  const [lightcolor, setLightColor] = useState([1, 1, 1]);
  useEffect(() => {}, []);
  return (
    <section className="roomdetailpage">
      <div className="product_wrap">
        <div className="product_img">
          <Canvas>
            <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
            <PerspectiveCamera makeDefault fov={30} position={[-7, 5, 15]} />
            <pointLight position={[-10, -10, -10]} />
            <ambientLight intensity={0.4} />
            <spotLight
              position={[20, 15, 0]}
              angle={0.6}
              intensity={2}
              penumbra={0.5}
              color={lightcolor}
            />
            <color args={backcolor} attach="background" />
            <RoomLoader filename={filename} />
          </Canvas>
        </div>
        <div className="product_text">
          <h3 className="product_title">{title}</h3>
          <h4 className="product_price">{price}원</h4>
          <p className="product_explain">{content}</p>
          <div>
            <div className="btn_gray_black">구매</div>
            <div
              className="btn_black_white"
              onClick={() => {
                dispatch(
                  roomSlice.actions.signRoom({
                    title: title,
                    price: price,
                    detailobj: detailobj,
                    filename: filename,
                  })
                );
                alert("장바구니에 담았습니다.");
              }}
            >
              장바구니 담기
            </div>
          </div>
          <p className="product_another">디자인에 들어간 제품</p>
          <ul className="another_wrap">
            {detailobj.map((item, index) => {
              const detailImg = "/images/objects/" + item.filename + ".jpg";
              return (
                <li
                  onClick={() => {
                    navigate("../furniture/" + item.filename, {
                      state: {
                        title: item.title,
                        price: item.objprice,
                        filename: item.filename,
                      },
                    });
                  }}
                >
                  <img className="anotherImg" src={detailImg} />
                </li>
              );
            })}
          </ul>
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
