import { useEffect, useState } from "react";
import PollChart from "./PollChart";

export default function PollCard({ poll, onVote, onDelete }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const voted = localStorage.getItem(`voted_${poll.id}`);
    const selectedOption = localStorage.getItem(`selected_${poll.id}`);

    if (voted) {
      setHasVoted(true);
      setSelected(Number(selectedOption));
    }
  }, [poll.id]);

  const handleVote = (i) => {
    if (hasVoted) return;

    onVote(poll.id, i);

    localStorage.setItem(`voted_${poll.id}`, "true");
    localStorage.setItem(`selected_${poll.id}`, i);

    setSelected(i);
    setHasVoted(true);
  };

  const totalVotes = poll.options.reduce((a, b) => a + b.votes, 0);
  const maxVotes = Math.max(...poll.options.map(o => o.votes));

  return (
    <div className="bg-white  p-4 rounded shadow transition">
      <h2 className="font-semibold text-lg mb-3 dark:text-white">
        {poll.question}
      </h2>

      {poll.options.map((o, i) => {
        const percent = totalVotes
          ? ((o.votes / totalVotes) * 100).toFixed(1)
          : 0;

        const isWinner = o.votes === maxVotes && totalVotes > 0;
        const isSelected = selected === i;

        return (
          <div
            key={i}
            onClick={() => handleVote(i)}
            className={`mb-3 p-2 rounded cursor-pointer transition-all duration-300
              ${
                hasVoted
                  ? "cursor-not-allowed"
                  : "hover:bg-gray-100 dark:hover:bg-gray-700"
              }
              ${
                isSelected
                  ? "border-2 border-blue-500 bg-blue-50 dark:bg-gray-700"
                  : ""
              }
            `}
          >
            <div className="flex justify-between text-sm">
              <span
                className={`${
                  isWinner ? "text-green-600 font-bold" : ""
                } dark:text-white`}
              >
                {o.text}
              </span>

              <span className="dark:text-white">
                {percent}% ({o.votes})
              </span>
            </div>

            <div className="bg-gray-200 h-3 rounded mt-1">
              <div
                className={`h-3 rounded transition-all duration-700 ${
                  isWinner ? "bg-green-500" : "bg-blue-500"
                }`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}

      <p className="text-sm mt-2 font-medium dark:text-white">
        Total Votes: {totalVotes}
      </p>

      <PollChart poll={poll} />

      <button
        onClick={() => onDelete(poll.id)}
        className="bg-red-500 text-white px-3 py-1 mt-3 rounded"
      >
        Delete
      </button>
    </div>
  );
}