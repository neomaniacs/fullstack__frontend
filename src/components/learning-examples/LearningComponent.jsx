import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import { FithComponent } from "./FirstComponent";
import LearningJavascript from "./LearningJavascript";

export default function LearningComponent() {
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FithComponent />
      <LearningJavascript />
    </div>
  );
}
