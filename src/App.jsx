import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";
import OverviewSection from "./components/OverviewSection/OverviewSection";
import Pagination, { PageNavigation } from "./components/Pagination/Pagination";
import TransactionSection from "./components/TransactionSection/TransactionSection";
import TransactionTable from "./components/TransactionSection/TransactionTable";
import "./global.css";

function App() {
  return (
    <div className="flex  bg-[#fafafa]">
      <Navbar />
    <div className="w-full h-full ">
      
      <Header />
      <div className="p-[32px]">
      <div>
      <OverviewSection />
      </div>
      <div className="flex flex-col gap-[24px] ">
        <TransactionSection />
        <Pagination />
      </div>
      </div>
    </div>
    </div>
  );
}

export default App;
