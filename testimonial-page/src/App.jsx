import CardSection from "./components/CardSection";
import ReviewSection from "./components/ReviewSection";

function App() {
  return (
    <main className="font-sora  bg-primary min-h-screen grid place-items-center ">
      <div className="flex flex-col md:flex-row w-[93%] md:w-[90%] gap-24 mx-auto md:justify-evenly">
        <ReviewSection />
        <CardSection />
      </div>
    </main>
  );
}

export default App;
