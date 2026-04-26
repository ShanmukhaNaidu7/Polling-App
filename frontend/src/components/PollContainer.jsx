import { useEffect, useState } from "react";
import API from "../api";
import CreatePoll from "./CreatePoll";
import PollCard from "./PollCard";
import PastPollsTable from "./PastPollsTable";
import Dashboard from "./Dashboard";

export default function PollContainer() {
  const [polls, setPolls] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const fetchPolls = async () => {
    const res = await API.get("/polls");
    setPolls(res.data);
  };

  useEffect(() => {
    fetchPolls();
  }, []);

  useEffect(() => {
    if (polls.length > 0) setShowTable(true);
  }, [polls]);

  const createPoll = async (data) => {
    await API.post("/polls", data);
    await fetchPolls();
    setShowTable(true);
  };

  const votePoll = async (id, index) => {
    await API.post(`/polls/${id}/vote`, { optionIndex: index });
    fetchPolls();
  };

  const deletePoll = async (id) => {
    await API.delete(`/polls/${id}`);
    fetchPolls();
  };

  return (
    <>
      <CreatePoll onCreate={createPoll} />

      <div className="space-y-4 mt-6">
        {polls.map(p => (
          <PollCard
            key={p.id}
            poll={p}
            onVote={votePoll}
            onDelete={deletePoll}
          />
        ))}
      </div>

      <Dashboard polls={polls} />

      {showTable && (
        <PastPollsTable polls={polls} onDelete={deletePoll} />
      )}
    </>
  );
}