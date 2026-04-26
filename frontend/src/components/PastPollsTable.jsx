export default function PastPollsTable({ polls, onDelete }) {
  return (
    <div className="mt-10 bg-white p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Past Questions</h2>

      <table className="w-full border-amber-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border-amber-300">Question</th>
            <th className="p-2 border-amber-300">Results</th>
            <th className="p-2 border-amber-300">Total</th>
            <th className="p-2 border-amber-300">Remove</th>
          </tr>
        </thead>

        <tbody>
          {polls.map(p => {
            const totalVotes = p.options.reduce((a, b) => a + b.votes, 0);

            return (
              <tr key={p.id}>
                <td className="p-2 border-amber-300">{p.question}</td>

                <td className="p-2 border-amber-300">
                  {p.options.map((o, i) => {
                    const percent = totalVotes
                      ? ((o.votes / totalVotes) * 100).toFixed(1)
                      : 0;

                    return (
                      <div key={i}>
                        {o.text} — {percent}% ({o.votes})
                      </div>
                    );
                  })}
                </td>

                <td className="p-2 border-amber-300 text-center">
                  {totalVotes}
                </td>

                <td className="p-2 border-amber-300 text-center">
                  <button
                    onClick={() => onDelete(p.id)}
                    className="bg-black text-white focus hover:bg-blue-500 hover:text-black px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}