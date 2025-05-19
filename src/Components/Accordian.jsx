import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export const Accordian = ({ item, expand, setExpand, question, answer }) => {
  return (
    <div className="accordian division">
      {expand === item.id ? (
        <IoIosArrowUp onClick={() => setExpand(0)} style={{ float: "right" }} />
      ) : (
        <IoIosArrowDown onClick={() => setExpand(item.id)} style={{ float: "right" }} />
      )}
      <p>{question}</p>
      {expand === item.id && <small>{answer}</small>}
    </div>
  );
}
