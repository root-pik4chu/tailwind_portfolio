import React from "react";


const LeetCodeGraph = () => {
  return (
    <div className="p-4 rounded-xl bg-zinc-950 text-white">
      <h2 className="text-xl font-bold mb-2">LeetCode Activity</h2>
      <img src="https://leetcode-badge-api.vercel.app/api/get-heatmap?username=_root_" />
    </div>
  );
};

export default LeetCodeGraph;
