import { ShoppingCartOutlined } from "@ant-design/icons/lib/icons";
import { getDocs, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { firestore } from "../firebase";
import { useEffect, useState } from "react";
import "./RoomPage.scss";
import { roomType } from "../types/types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
export default function RoomPage() {
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const [roomdata, setRoomData] = useState<roomType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getRoom();
  }, []);
  return (
    <section className="roompage">
      <div className="header_sheld" />
      <Swiper className="swiper" autoplay={{ delay: 4000 }} slidesPerView={1}>
        <div className="swiper-wrapper">
          {roomdata.map((item, index) => {
            const imgSrc = "/images/rooms/" + item.filename + ".jpg";
            return (
              <SwiperSlide
                className="swiper-slide"
                key={"slide map - " + index}
              >
                <div className="topbanner">
                  <div className="banner_left">
                    <h3 className="banner_title">{item.title}</h3>
                    <p className="banner_content">{item.content}</p>
                    <div
                      className="btn_gray_white2"
                      onClick={() =>
                        navigate(item.filename, {
                          state: {
                            title: item.title,
                            content: item.content,
                            price: item.price,
                            filename: item.filename,
                            detailobj: item.detailobj,
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
      <div className="room_list">
        <ul>
          {roomdata.map((item, index) => {
            const imgSrc = "/images/rooms/" + item.filename + ".jpg";
            return (
              <li
                className="item_wrap"
                key={"room-li-" + index}
                onClick={() =>
                  navigate(item.filename, {
                    state: {
                      title: item.title,
                      content: item.content,
                      price: item.price,
                      filename: item.filename,
                      detailobj: item.detailobj,
                    },
                  })
                }
              >
                <img className="item_img" src={imgSrc} />
                <h4 className="item_title">{item.title}</h4>
                <p className="item_content">{item.content}</p>
                <p className="item_price">{item.price}원</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );

  function getRoom() {
    const q = query(firestore.collection("RoomProduct"));
    getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let pushdata: roomType = {
          filename: doc.data().filename,
          content: doc.data().content,
          price: doc.data().price,
          time: doc.data().time,
          title: doc.data().title,
          detailobj: doc.data().detailobj,
        };
        setRoomData((room) => [...room, pushdata]);
      });
    });
  }
}
