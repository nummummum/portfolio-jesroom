import {
  BaseSyntheticEvent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { furnitureCartType, roomCartType } from "../types/types";
import "./CartPage.scss";
export default function CartPage() {
  const dispatch = useDispatch();
  const roomCart: roomCartType[] = useSelector((state: any) => {
    return state.room.list;
  });
  const furnitureCart: furnitureCartType[] = useSelector((state: any) => {
    return state.furniture.list;
  });
  const [totalGold, setTotalGold] = useState<number>(0);
  const detailref = useRef<null[] | HTMLDivElement[]>([]);
  useEffect(() => {
    roomCart.map((item) => {
      setTotalGold((gold) => gold + item.price);
    });
    furnitureCart.map((item) => {
      setTotalGold((gold) => gold + item.price);
    });
  }, []);
  return (
    <section className="cartpage">
      <p className="cart_title_top">장바구니 내역</p>
      <section className="cashreceipt">
        <p className="cart_title">방</p>
        <ul className="buy_room_wrap">
          {roomCart.map((item, index) => {
            if (item.title === "") {
              return <></>;
            }
            const roomSrc = "/images/rooms/" + item.filename + ".jpg";
            return (
              <li key={"room - " + index}>
                <div className="item_wrap">
                  <img className="item_img" src={roomSrc} />
                  <div className="item_text">
                    <h4 className="item_title">{item.title}</h4>
                    <h4 className="item_price">{item.price}원</h4>
                  </div>
                  <p
                    className="item_detail"
                    onClick={() => {
                      changeDetail(index);
                    }}
                  >
                    Detail
                  </p>
                </div>
                <div
                  ref={(element) => {
                    detailref.current[index] = element;
                  }}
                  className="detail_clicked"
                >
                  <ul>
                    {item.detailobj.map((detailitem, objindex) => {
                      const objSrc =
                        "/images/objects/" + detailitem.filename + ".jpg";
                      return (
                        <li key={"object - " + objindex}>
                          <img className="detail_img" src={objSrc} />
                          <p className="detail_title">{detailitem.title}</p>
                          <p className="detail_price">
                            {detailitem.objprice}원
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="cart_title">가구</p>
        <ul className="buy_furniture_wrap">
          {furnitureCart.map((item, index) => {
            if (item.title === "") {
              return <></>;
            }
            const furnitureSrc = "images/objects/" + item.filename + ".jpg";
            return (
              <li key={"object map - " + index}>
                <img className="item_img" src={furnitureSrc} />
                <div className="item_text">
                  <h4 className="item_title">{item.title}</h4>
                  <h4 className="item_price">{item.price}원</h4>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="totalprice">Total : {totalGold}원</p>
        <div className="btn_red_white">구매하기</div>
      </section>
    </section>
  );

  function changeDetail(index: number) {
    if (detailref.current[index]!.style.display == "none") {
      detailref.current[index]!.style.display = "block";
    } else if (detailref.current[index]!.style.display == "block") {
      detailref.current[index]!.style.display = "none";
    } else {
      detailref.current[index]!.style.display = "none";
    }
  }
}
