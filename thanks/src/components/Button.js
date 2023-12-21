import Button from "@/styles/Button.module.css";
const Modify = (props) => {
  const { text, width = "", txtcolor = "", bg = "", Fsize } = props;
  return (
    <div
      className={Button.decent}
      style={{
        width: width,
        color: txtcolor,
        backgroundColor: bg,
        fontSize: Fsize,
      }}
    >
      {text}
    </div>
  );
};
export default Modify;
