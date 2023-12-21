import Super from "@/styles/Input.module.css";
const Bloom = (props) => {
  const { place, type } = props;
  return (
    <div>
      <input className={Super.franky} type={type} placeholder={place} />
    </div>
  );
};
export default Bloom;
