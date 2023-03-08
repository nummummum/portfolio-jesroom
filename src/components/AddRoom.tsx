import { Button } from "antd";
import { getDocs, query } from "firebase/firestore";
import { ChangeEvent, useEffect, useState } from "react";
import { firestore } from "../firebase";
import { furnitureType } from "../types/types";
import "./AddRoom.scss";
type detailType = {
  title: string;
  filename: string;
  objprice: number;
};
export default function AddRoom() {
  const [filename, setFilename] = useState("");
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [furnitureData, setFurnitureData] = useState<furnitureType[]>([]);
  const [detailobj, setDetailObj] = useState<detailType[]>([]);

  useEffect(() => {
    getFurniture();
  }, []);
  return (
    <div className="addform">
      <p className="formtitle">파일 이름 : </p>
      <input type="text" value={filename} onChange={onChangeFile} />
      <p className="formtitle">방 이름 : </p>
      <input type="text" value={title} onChange={onChangeTitle} />
      <p className="formtitle">설명 : </p>
      <input type="text" value={content} onChange={onChangeContent} />
      <p className="formtitle">판매 가격 (만원) : </p>
      <input type="number" value={price} onChange={onChangePrice} />
      <div className="detailobj">
        <ul>
          {furnitureData.map((item, index) => {
            return (
              <li
                onClick={() => {
                  addDetailObj(item.title, item.filename, item.price);
                }}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      {detailobj.map((item, index) => {
        return <div className="showDetail">{item.title}</div>;
      })}
      <Button
        className="admitBtn"
        onClick={() => {
          addRoom();
        }}
      >
        제출하기
      </Button>
    </div>
  );
  function onChangeFile(e: ChangeEvent<HTMLInputElement>) {
    setFilename(e.target.value);
  }
  function onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  function onChangePrice(e: ChangeEvent<HTMLInputElement>) {
    setPrice(parseInt(e.target.value));
  }
  function onChangeContent(e: ChangeEvent<HTMLInputElement>) {
    setContent(e.target.value);
  }
  function addDetailObj(name: string, filename: string, price: number) {
    setDetailObj((data) => [
      ...data,
      { title: name, filename: filename, objprice: price },
    ]);
    console.log(detailobj);
  }
  function addRoom() {
    let now = new Date();
    let year = now.getFullYear() + "";
    let month = now.getMonth() + 1 + "";
    if (parseInt(month) < 10) {
      month = "0" + month;
    }
    let date = now.getDate() + "";
    if (parseInt(date) < 10) {
      date = "0" + date;
    }
    let hour = now.getHours() + "";
    if (parseInt(hour) < 10) {
      hour = "0" + hour;
    }
    let minute = now.getMinutes() + "";
    if (parseInt(minute) < 10) {
      minute = "0" + minute;
    }
    let second = now.getSeconds() + "";
    if (parseInt(second) < 10) {
      second = "0" + second;
    }
    let nowTime = year + month + date + hour + minute + second;
    const fbRoom = firestore.collection("RoomProduct");
    fbRoom.doc(filename).set({
      filename: filename,
      price: price * 10000,
      time: nowTime,
      title: title,
      content: content,
      detailobj: detailobj,
    });
    setFilename("");
    setPrice(0);
    setTitle("");
    setContent("");
    setDetailObj([]);
  }
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
        setFurnitureData((furniture) => [...furniture, pushdata]);
      });
    });
  }
}
