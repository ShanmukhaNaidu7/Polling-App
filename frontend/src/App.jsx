
import './App.css'

import PollContainer from "./components/PollContainer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Polling Dashboard
        </h1>

        <PollContainer />
      </div>
    </div>
  );
}
