import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import OverviewSection from "./components/Overview";
import TransactionTable from "./components/TransactionSection/TransactionTable";
import "./global.css";

function App() {
  return (
    <div className="APP_CONTAINER flex">
      <Navbar />
    <div className="w-full h-full  bg-[rgb(250,250,250)]">
      
      <Header />
      <div className="p-[32px]">
      <div>
      <OverviewSection />
      </div>
      <div>
        <TransactionTable />
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
