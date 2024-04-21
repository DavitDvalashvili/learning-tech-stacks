"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
    //next and previous could be use here for navigation, search how.
  };
  return (
    <>
      <h1>Order product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
