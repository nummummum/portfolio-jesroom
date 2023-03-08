import { Button } from "antd";
import { ChangeEvent, useState } from "react";
import { firestore } from "../firebase";
import "./AddFurniture.scss";

export default function AddFurniture() {
  const [filename, setFilename] = useState("");
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [type, setType] = useState(1);

  return (
    <div className="addform">
      <p className="formtitle">파일 이름 : </p>
      <input type="text" value={filename} onChange={onChangeFile} />
      <p className="formtitle">가구 이름 : </p>
      <input type="text" value={title} onChange={onChangeTitle} />
      <p className="formtitle">판매 가격 : </p>
      <input type="number" value={price} onChange={onChangePrice} />
      <p className="formtitle">
        제품 타입 : 가구(1) 가전제품(2) 장식(3) 기타(4){" "}
      </p>
      <input type="text" value={type} onChange={onChangeType} />
      <Button
        onClick={() => {
          addFurniture();
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
  function onChangeType(e: ChangeEvent<HTMLInputElement>) {
    setType(parseInt(e.target.value));
  }
  function addFurniture() {
    let submitType: string;
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
    switch (type) {
      case 1:
        submitType = "furniture";
        break;
      case 2:
        submitType = "electronic";
        break;
      case 3:
        submitType = "decoration";
        break;
      default:
        submitType = "etc";
        break;
    }
    const fbfurniture = firestore.collection("FurnitureProduct");
    fbfurniture.doc(filename).set({
      filename: filename,
      price: price,
      time: nowTime,
      title: title,
      type: submitType,
    });
    setFilename("");
    setPrice(0);
    setTitle("");
    setType(1);
  }
}
