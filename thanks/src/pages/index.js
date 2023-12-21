import Modify from "@/components/Button";
import Bloom from "@/components/Input";
export default function Home() {
  return (
    <div class="container">
      <Bloom type="text" place="Email or phone number" />
      <Bloom type="password" place="Password" />
      <Modify
        text={"Log In"}
        bg="blue"
        width="280px"
        txtcolor="white"
        Fsize="20px"
      />
      <Modify text={"Forgot password?"} txtcolor="blue" Fsize="20" />
      <Modify
        text={"Create new account"}
        width="190px"
        bg="green"
        Fsize="20px"
        txtcolor="white"
      />
    </div>
  );
}
