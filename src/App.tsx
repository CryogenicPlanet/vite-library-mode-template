import React from "react";
import { tw } from "twind";
import { useDummyHook } from "./lib";


function App() {
  useDummyHook()
  return (
    <div className={tw("flex flex-col")}
    >
      {[...Array(20)].map((_el, index) => (
        <Card key={index} index={index} />
      ))}
    </div>
  );
}

const Card = ({ index }: { index: number }) => {
  return (
    <>
      <div id={`${index}`} className={tw("w-12 h-12 m-2 text-gray-200")}>
        {index}
      </div>
    </>
  );
};

export default App;
