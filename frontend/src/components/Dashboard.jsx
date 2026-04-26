import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function Dashboard({ polls }) {
  if (!polls.length) return null;

  const totalPolls = polls.length;
  const totalVotes = polls.reduce(
    (sum, p) => sum + p.options.reduce((a, b) => a + b.votes, 0),
    0
  );

  const barData = {
    labels: polls.map(p => p.question),
    datasets: [
      {
        label: "Votes",
        data: polls.map(p =>
          p.options.reduce((a, b) => a + b.votes, 0)
        ),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const allOptions = polls.flatMap(p => p.options);

  const doughnutData = {
    labels: allOptions.map(o => o.text),
    datasets: [
      {
        data: allOptions.map(o => o.votes),
        backgroundColor: [
          "#3b82f6",
          "#22c55e",
          "#f59e0b",
          "#ef4444",
          "#a855f7",
        ],
      },
    ],
  };

  return (
    <div className="mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Chart Dashboard</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-2xl text-center">
          <p>Total Polls</p>
          <p className="font-bold">{totalPolls}</p>
        </div>

        <div className="bg-green-100 p-4 rounded-2xl text-center">
          <p>Total Votes</p>
          <p className="font-bold">{totalVotes}</p>
        </div>
      </div>

      <div className="">
          <Bar data={barData} className="" />
        <div className="mt-6">
          <Doughnut data={doughnutData} className="" />
        </div>
      </div>
    </div>
  );
}