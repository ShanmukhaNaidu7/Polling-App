import { useState } from "react";

export default function CreatePoll({ onCreate }) {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);

  const addOption = () => {
    if (options.length < 4) setOptions([...options, ""]);
  };

 const removeOption = (i) => {
  setOptions((prev) =>
    prev.length > 2 ? prev.filter((_, idx) => idx !== i) : prev
  );
};

  const submit = () => {
    if (!question || options.some(o => !o)) return;
    onCreate({ question, options });
    setQuestion("");
    setOptions(["", ""]);
  };

  return (
    <div className="bg-white w-full p-4 rounded-2xl shadow">
      <input
        className="w-full p-2 mb-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-0 hover:border-amber-300 focus:border-red-300"
        placeholder="Enter question"
        value={question}
        onChange={e => setQuestion(e.target.value)}
      />

      {options.map((opt, i) => (
        <div key={i} className="flex gap-2 mb-2">
          <input
            className="flex-1  border border-gray-300 rounded-2xl focus:outline-none focus:ring-0 hover:border-amber-300 focus:border-red-300 p-2"
            placeholder={`Option ${i + 1}`}
            value={opt}
            onChange={e => {
              const arr = [...options];
              arr[i] = e.target.value;
              setOptions(arr);
            }}
          />
          <button
              onClick={() => removeOption(i)}
              disabled={options.length <= 2}
              className="border border-gray-300 
              text-black-300 focus hover:bg-amber-600 
              hover:text-white hover:border-0 rounded-2xl px-3 py-1 disabled:opacity-40"
            >
              Delete
            </button>
        </div>
      ))}

      <div className="flex gap-2">
        <button
          onClick={addOption}
          className="bg-blue-500 focus hover:bg-blue-400 text-white px-3 py-1 rounded-2xl"
        >
          Add Option
        </button>

        <button
          onClick={submit}
          className="bg-orange-400 focus hover:bg-amber-300 text-white px-3 py-1 rounded-2xl"
        >
          Create Poll
        </button>
      </div>
    </div>
  );
}