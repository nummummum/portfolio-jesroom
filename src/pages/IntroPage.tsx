import { useEffect } from "react";
import AniIntro from "../animations/AniIntro";
import "./IntroPage.scss";

export default function IntroPage() {
  useEffect(() => {
    AniIntro();
  }, []);
  return (
    <section className="IntroWrap">
      <div className="header_sheld" />
      <div className="Intro">
        <h3 className="title">3D Shopping House 포트폴리오 소개</h3>
        <img src="/images/introImg1.png" />
        <p className="content">
          이 홈페이지는 React, TypeScript, R3F를 이용하여 만들어진 3D 웹사이트
          포트폴리오입니다. 3D를 구현하는데에 목표를 두었으며 사용자는 구현된
          방과 물체들을 조종하고 빛과 배경등을 조절 할 수 있습니다.
        </p>
      </div>
      <div className="blender">
        <h3 className="title">포트폴리오에 사용된 모델</h3>
        <img src="/images/introImg2.png" />
        <p className="content">
          사용된 모델들은 Blender라는 모델링 프로그램들을 이용하여 모두 직접
          모델링을 하였습니다. 물체와 방을 모두 제작하고 export하여 사용하기
          때문에 저작권은 제작자인 본인에게 있습니다.
        </p>
      </div>
      <div className="option">
        <h3 className="title">포트폴리오에 사용된 기능들</h3>
        <img src="/images/introImg3.png" />
        <p className="content">
          기본적으로는 쇼핑몰의 구성을 따릅니다. 파이어베이스를 통한 DB 연동,
          React-Three-Fiber과 관련 라이브러리와 Blender 프로그램을 이용한 모델링
          구현 및 조작기능 구현, Redux로 장바구니 상태관리등을 구현하였습니다.
        </p>
      </div>
      <div className="database">
        <h3 className="title">데이터베이스</h3>
        <img src="/images/introImg4.png" />
        <p className="content">
          데이터베이스는 Firebase 사이트의 도움을 받아 구축하였고 데이터 추가의
          편의성을 위하여 데이터 추가 페이지를 만들어 데이터를 추가하였습니다.
        </p>
      </div>
      <div className="interactive">
        <h3 className="title">반응형 웹</h3>
        <img src="/images/introImg5.png" />
        <p className="content">
          사용자가 어떤 기기에서든 편하게 접속 할 수 있또록 반응형 웹을 구현하여
          PC, 태블릿, 모바일 모두 편하게 확인 할 수 있도록 하였습니다.
        </p>
      </div>
    </section>
  );
}
