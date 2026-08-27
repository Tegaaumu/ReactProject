import Bill from "./Bill";
import FriendServices from "./FriendServices";
import UserService from "./UserService";
import Pay from "./Pay";
// import Services from "./Services";
import { useState } from "react";

export default function TipCalculator() {
  const [currentValue, setCurrentValue] = useState("");
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [UsercurrentPercentage, setUserCurrentPercentage] = useState(0);

  const tip =
    currentValue * ((currentPercentage + UsercurrentPercentage) / 2 / 100);

  function ResetAll() {
    setCurrentValue("");
    setCurrentPercentage(0);
    setUserCurrentPercentage(0);
  }

  return (
    <div>
      <Bill cuValue={currentValue} setCuValue={setCurrentValue} />
      {/* <Services
        cuPer={UsercurrentPercentage}
        setCuPer={setUserCurrentPercentage}
      >
        How did you like the services?
      </Services>
      <Services
        cuPer={UsercurrentPercentage}
        setCuPer={setUserCurrentPercentage}
      >
        How did your friend like the services?
      </Services> */}
      <UserService
        cuPer={UsercurrentPercentage}
        setCuPer={setUserCurrentPercentage}
      />
      <FriendServices
        cuPer={currentPercentage}
        setCuPer={setCurrentPercentage}
      />
      {currentValue > 0 && (
        <>
          <Pay newValue={currentValue} tip={tip} />
          <Reset resetFunc={ResetAll} />
        </>
      )}
    </div>
  );
}

function Reset({ resetFunc }) {
  return <button onClick={() => resetFunc()}>Reset</button>;
}
