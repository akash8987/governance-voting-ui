import React from 'react';
import { useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { GOVERNOR_ABI } from './constants';

export function VotingComponent({ proposalId }: { proposalId: bigint }) {
  const { data: hash, writeContract, isPending } = useWriteContract();

  const handleVote = (support: number) => {
    writeContract({
      address: '0xYOUR_GOVERNOR_ADDRESS',
      abi: GOVERNOR_ABI,
      functionName: 'castVote',
      args: [proposalId, support],
    });
  };

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  return (
    <div className="flex flex-col gap-4 p-6 bg-slate-900 rounded-xl border border-slate-800">
      <h3 className="text-xl font-bold text-white">Cast Your Vote</h3>
      <div className="flex gap-2">
        <button 
          onClick={() => handleVote(1)} 
          disabled={isPending}
          className="flex-1 bg-green-600 hover:bg-green-500 p-2 rounded text-white font-medium"
        >
          For
        </button>
        <button 
          onClick={() => handleVote(0)} 
          disabled={isPending}
          className="flex-1 bg-red-600 hover:bg-red-500 p-2 rounded text-white font-medium"
        >
          Against
        </button>
        <button 
          onClick={() => handleVote(2)} 
          disabled={isPending}
          className="flex-1 bg-slate-700 hover:bg-slate-600 p-2 rounded text-white font-medium"
        >
          Abstain
        </button>
      </div>
      {isConfirming && <p className="text-yellow-400">Transaction pending...</p>}
      {isSuccess && <p className="text-green-400">Vote submitted successfully!</p>}
    </div>
  );
}
