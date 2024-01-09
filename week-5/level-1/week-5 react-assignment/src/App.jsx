import "./App.css";
import Card from "./Card";

function App() {
  const cardData = {
    id: 1,
    name: "Name",
    description: "description",
    interests: ["React", "tailwind", "MongoDb"],
    socialMedia: ["LinkedIn", "Twitter", "Instagram"],
  };

  return (
    <>
      <Card {...cardData} />
    </>
  );
}

export default App;
