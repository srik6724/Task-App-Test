import { useState } from "react";
import "./CheckMark.css";
function CheckMarkComponent() {
  const [originalText, newText] = useState("Complete Task.");

  function registerClick() {
    newText("Task is completed.");
  }

  return (
    <div>
      <button class="green-button" onClick={registerClick}>
        {originalText}
      </button>
    </div>
  );
}

export default CheckMarkComponent;
