import { useState } from "react";

function useInput() {
  // 반복로직 한번만 사용가능
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
