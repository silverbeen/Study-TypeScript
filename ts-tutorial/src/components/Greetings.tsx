import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void; //아무것도 리턴하지 않는다
};

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  const handleClick = () => onClick(name);

  return (
    <>
      안녕 , {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>클릭하셈</button>
      </div>
    </>
  );
}

Greetings.defaultProps = {
  mark: "?",
};

export default Greetings;
