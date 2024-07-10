import { useRef, useState } from "react";
import React from "react";

// const Child = (props : {count: number}) => {
//   const renderCount = useRef(0);
//   console.log("child render count ", ++renderCount.current);

//   return (
//     <div className="child">
//       Child {props.count}
//     </div>
//   );
// };

//react.memo
//export default React.memo(Child);
// memo გამოიყენება რენდერის თავიდან ასაცილებლად როდესაც კომპონენეტს არ გადმოეცემა პროპსები ან და ეს პროპსები არ იცლება 
//თუ პროპესების მნიშვნელობა იცვლება მაშინ რენდერი ხდება 

// export default React.memo(Child, (prevProps, nextProps) => {
//     if(prevProps.count === nextProps.count) {
//         return true
//     } else {
//         return false;
//     }
//     // თუ აქ თრუ დაბრუნდა არ მოხდება რერენდერი, თუ აქ ფოლსი დაბრუნდა მოხდება რერენდერი
// });




const Child = (props : {handleSomething : () => void}) => {
  const renderCount = useRef(0);
  console.log("child render count ", ++renderCount.current);
   
  return (
    <div className="child">
      Child 
    </div>
  );
};

export default React.memo(Child);