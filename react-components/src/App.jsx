import "./App.css";
import { ArraysInProps, ArraysInPropsDestructured } from "./ArraysInProps";
import BothList from "./BothList";
import { ObjectsInProps, ObjectsInPropsDestructured } from "./ObjectsInProps";
import OrderedList from "./OrderedList";
import UnorderedList from "./UnorderedList";
function App() {
  const studentInfo = {
    name: "Billie",
    age: 21,
    city: "New Delhi",
    country: "India",
  };
  let collegeNames = ["IET", "DU", "IIT", "NIT", "MIT"];
  return (
    <>
      <h1>Props in React.js</h1>
      <UnorderedList
        item1="first ul item"
        item2="second ul item"
        item3="third ul item"
        item4="fourth ul item"
      />
      <OrderedList
        item1="first ol item"
        item2="second ol item"
        item3="third ol item"
        item4="fourth ol item"
      />
      <BothList
        ulItem1="first mixed ul item"
        ulItem2="second mixed ul item"
        olItem1="first mixed ol item"
        olItem2="second mixed ol item"
      />
      <ObjectsInProps info={studentInfo} />
      <ObjectsInPropsDestructured info={studentInfo} />
      <ArraysInProps names={collegeNames} />
      <ArraysInPropsDestructured names={collegeNames} />
    </>
  );
}

export default App;
