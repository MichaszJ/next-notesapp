import Sidebar from "../Components/Sidebar";
import MainPane from "../Components/MainPane";

export default function Home() {
  return (
    <div className="flex-grow p-4">
      <h1 className="text-center text-xl pt-2">Welcome!</h1>
      <p className="text-center pt-8">Open a note to get started</p>
    </div>
  );
}
