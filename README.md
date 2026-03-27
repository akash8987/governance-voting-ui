# Governance Voting UI

This repository provides a clean, user-friendly interface for any DAO utilizing the OpenZeppelin Governor standard. It abstracts the complexity of contract interactions, allowing token holders to focus on the decision-making process.

## Key Features
* **Wallet Connection**: Powered by RainbowKit for a seamless multi-wallet experience.
* **Proposal Discovery**: Automatically fetches and displays active, passed, and failed proposals.
* **State Management**: Uses Wagmi hooks for reactive UI updates (e.g., "Voting" vs. "Succeeded").
* **Optimized for Speed**: Server-side rendering for fast initial loads of proposal descriptions.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Hooks**: Wagmi & TanStack Query
- **Styling**: Tailwind CSS
- **Wallet**: RainbowKit
