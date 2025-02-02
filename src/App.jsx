// components
import Content from "./component/Content";
import Image from "./component/Image";
function App() {
  return (
    <div className="bg-blue-300  w-[80vw] grid grid-col lg:grid-cols-2">
      <Content />
      <Image />
    </div>
  );
}

export default App;
