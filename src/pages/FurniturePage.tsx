import { ShoppingCartOutlined } from "@ant-design/icons";
import { getDocs, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { firestore } from "../firebase";
import { useEffect, useState } from "react";
import "./FurniturePage.scss";
import { furnitureType } from "../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
export default function FurniturePage() {
  const [objectdata, setObjectData] = useState<furnitureType[]>([]);
  const [furnituredata, setFurnitureData] = useState<furnitureType[]>([]);
  const [electrodata, setElectroData] = useState<furnitureType[]>([]);
  const [decordata, setDecorData] = useState<furnitureType[]>([]);
  const [typedata, setTypeData] = useState("all");
  const navigate = useNavigate();
  useEffect(() => {
    getFurniture();
  }, []);
  return (
    <section className="furniturepage">
      <div className="header_sheld" />
      <Swiper className="swiper" autoplay={{ delay: 4000 }} slidesPerView={1}>
        <div className="swiper-wrapper">
          {objectdata.map((item, index) => {
            const imgSrc = "/images/objects/" + item.filename + ".jpg";
            return (
              <SwiperSlide
                className="swiper-slide"
                key={"slide map - " + index}
              >
                <div className="topbanner">
                  <div className="banner_left">
                    <h3 className="banner_title">{item.title}</h3>
                    <p className="banner_content">{item.price}원</p>
                    <div
                      className="btn_gray_white2"
                      onClick={() =>
                        navigate(item.filename, {
                          state: {
                            title: item.title,
                            price: item.price,
                            filename: item.filename,
                          },
                        })
                      }
                    >
                      Buy now
                    </div>
                  </div>
                  <div className="banner_right">
                    <img src={imgSrc} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <ul className="division">
        <li className="division_wrap" onClick={() => setTypeData("all")}>
          <img className="division_img" src="images/rooms/sample.jpg" />
          <div className="btn_gray">전체보기</div>
        </li>
        <li className="division_wrap" onClick={() => setTypeData("furniture")}>
          <img className="division_img" src="images/objects/bed.jpg" />
          <div className="btn_gray">가구</div>
        </li>
        <li className="division_wrap" onClick={() => setTypeData("electronic")}>
          <img className="division_img" src="images/objects/computer.jpg" />
          <div className="btn_gray">가전제품</div>
        </li>
        <li className="division_wrap" onClick={() => setTypeData("decoration")}>
          <img className="division_img" src="images/objects/clock.jpg" />
          <div className="btn_gray">장식</div>
        </li>
      </ul>
      <div className="furniture_list">{showList()}</div>
    </section>
  );
  function getFurniture() {
    const q = query(firestore.collection("FurnitureProduct"));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let pushdata: furnitureType = {
          filename: doc.data().filename,
          price: doc.data().price,
          time: doc.data().time,
          title: doc.data().title,
          type: doc.data().type,
        };
        setObjectData((furniture) => [...furniture, pushdata]);
        switch (pushdata.type) {
          case "furniture": {
            setFurnitureData((furniture) => [...furniture, pushdata]);
            break;
          }
          case "electronic": {
            setElectroData((furniture) => [...furniture, pushdata]);
            break;
          }
          case "decoration": {
            setDecorData((furniture) => [...furniture, pushdata]);
            break;
          }
          default:
            break;
        }
      });
    });
  }
  function showList() {
    switch (typedata) {
      case "furniture": {
        return (
          <ul>
            {furnituredata.map((item, index) => {
              const itmeSrc = "/images/objects/" + item.filename + ".jpg";
              return (
                <li
                  className="item_wrap"
                  onClick={() =>
                    navigate(item.filename, {
                      state: {
                        title: item.title,
                        price: item.price,
                        filename: item.filename,
                      },
                    })
                  }
                >
                  <img className="item_img" src={itmeSrc} />
                  <h4 className="item_title">{item.title}</h4>
                  <p className="item_content">내용</p>
                  <p className="item_price">{item.price}원</p>
                </li>
              );
            })}
          </ul>
        );
      }
      case "electronic": {
        return (
          <ul>
            {electrodata.map((item, index) => {
              const itmeSrc = "/images/objects/" + item.filename + ".jpg";
              return (
                <li
                  className="item_wrap"
                  onClick={() =>
                    navigate(item.filename, {
                      state: {
                        title: item.title,
                        price: item.price,
                        filename: item.filename,
                      },
                    })
                  }
                >
                  <img className="item_img" src={itmeSrc} />
                  <h4 className="item_title">{item.title}</h4>
                  <p className="item_content">내용</p>
                  <p className="item_price">{item.price}원</p>
                </li>
              );
            })}
          </ul>
        );
      }
      case "decoration": {
        return (
          <ul>
            {decordata.map((item, index) => {
              const itmeSrc = "/images/objects/" + item.filename + ".jpg";
              return (
                <li
                  className="item_wrap"
                  onClick={() =>
                    navigate(item.filename, {
                      state: {
                        title: item.title,
                        price: item.price,
                        filename: item.filename,
                      },
                    })
                  }
                >
                  <img className="item_img" src={itmeSrc} />
                  <h4 className="item_title">{item.title}</h4>
                  <p className="item_content">내용</p>
                  <p className="item_price">{item.price}원</p>
                </li>
              );
            })}
          </ul>
        );
      }
      case "all": {
        return (
          <ul>
            {objectdata.map((item, index) => {
              const itmeSrc = "/images/objects/" + item.filename + ".jpg";
              return (
                <li
                  className="item_wrap"
                  onClick={() =>
                    navigate(item.filename, {
                      state: {
                        title: item.title,
                        price: item.price,
                        filename: item.filename,
                      },
                    })
                  }
                >
                  <img className="item_img" src={itmeSrc} />
                  <h4 className="item_title">{item.title}</h4>
                  <p className="item_content">내용</p>
                  <p className="item_price">{item.price}원</p>
                </li>
              );
            })}
          </ul>
        );
      }
      default:
        break;
    }
  }
}
