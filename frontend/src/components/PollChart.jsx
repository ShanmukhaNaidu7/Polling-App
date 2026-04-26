import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function PollChart({ poll }) {
  const data = {
    labels: poll.options.map(o => o.text),
    datasets: [
      {
        data: poll.options.map(o => o.votes),
        backgroundColor: ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"],
      },
    ],
  };

  return <Bar data={data} />;
}