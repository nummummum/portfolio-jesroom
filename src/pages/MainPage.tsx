import { useNavigate } from "react-router-dom";
import { OrbitControls } from "@react-three/drei";
import { PerspectiveCamera } from "@react-three/drei/core";
import { Canvas } from "@react-three/fiber";
import RoomLoader from "../components/RoomLoader";
import "./MainPage.scss";
import { useEffect } from "react";
import AniMain from "../animations/AniMain";

export default function MainPage() {
  const navigate = useNavigate();
  useEffect(() => {
    AniMain();
  }, []);
  return (
    <section className="mainpage">
      <div className="mention_wrap">
        <ul className="left_mention">
          <li>
            <h3 className="main_title">3D Shopping House </h3>
            <p className="sub_title">
              이제 사진뿐만 아니라 3D로 쇼핑해보세요. R3F를 이용하여 이제
              사진뿐만 아니라 삼차원에서 쇼핑이 가능합니다
            </p>
          </li>
          <li>
            <div className="btn_gray_white" onClick={() => navigate("room")}>
              Shop now
            </div>
          </li>
        </ul>
        <div className="right_mention">
          <Canvas>
            <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
            <PerspectiveCamera makeDefault fov={30} position={[-7, 5, 15]} />
            <pointLight position={[-10, -10, -10]} />
            <ambientLight intensity={0.4} />
            <spotLight
              position={[20, 15, 0]}
              angle={0.6}
              intensity={0.8}
              penumbra={0.5}
            />
            <color args={[0.1, 0.1, 0.1]} attach="background" />
            <RoomLoader filename="blackbutterfly" />
          </Canvas>
          <p className="canvas_guide">
            좌클릭, 우클릭, 휠을 드래그하여 방을 살펴보세요.
          </p>
        </div>
      </div>
      <div className="topbanner">
        <div className="banner_left">
          <h3 className="banner_title">여러 디자인의 방</h3>
          <p className="banner_content">
            3D로 구현된 방들을 만나 볼 수 있습니다. 여러 디자인의 방과 분위기를
            확인해보세요.
          </p>
          <div className="btn_gray_white2" onClick={() => navigate("room")}>
            Shop now
          </div>
        </div>
        <div className="banner_right">
          <img src="images/rooms/blackbutterfly.jpg" />
        </div>
      </div>

      <div className="topbanner">
        <div className="banner_left">
          <h3 className="banner_title">방에 배치된 물건을 한번에</h3>
          <p className="banner_content">
            방에 사용된 물건들을 볼 수 있습니다. 원하면 언제든 구입이
            가능합니다.
          </p>
          <div
            className="btn_gray_white2"
            onClick={() => navigate("furniture")}
          >
            Shop now
          </div>
        </div>
        <div className="banner_right">
          <img src="images/objects/keyboard.jpg" />
        </div>
      </div>
    </section>
  );
}
