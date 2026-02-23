import { useState } from "react";
import useInput from "../hooks/useInput";

const HookExam = () => {
  const [input1, onChange1] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input1} onChange={onChange1} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookExam;
