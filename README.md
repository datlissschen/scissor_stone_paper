# Roshambo Evolution

A modern, type-safe implementation of the classic Rock-Paper-Scissors game, including the legendary **Lizard-Spock Expansion**. Built with a focus on clean architecture, responsive design, and robust state management.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## Features

- **Dual Game Modes:** Toggle between the standard 3-choice game and the 5-choice "Lizard-Spock" expansion.
- **Strictly Typed:** Developed with **TypeScript** for predictable game logic and better developer experience.
- **Utility-First Styling:** Built with **Tailwind CSS** for a sleek, responsive, and mobile-friendly UI.
- **Score Persistence:** Tracks wins, losses, and draws across sessions.
- **Interactive UI:** Smooth transitions and hover effects to enhance the gaming experience.

## How to Play

### The Classic Mode
- **Rock** beats Scissors.
- **Scissors** beats Paper.
- **Paper** beats Rock.

### The Lizard-Spock Expansion
1. **Scissors** cuts Paper & decapitates Lizard.
2. **Paper** covers Rock & refutes Spock.
3. **Rock** crushes Lizard & crushes Scissors.
4. **Lizard** poisons Spock & eats Paper.
5. **Spock** smashes Scissors & vaporizes Rock.

---

## Tech Stack

- **Framework:** [React](https://reactjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool:** [Vite](https://vitejs.dev/) (or CRA)

---

## Project Structure

```text
src/
├── components/      # Functional UI components
├── constants/       # Game rules and variant configurations
├── hooks/           # Custom game logic and state hooks
├── types/           # TypeScript interfaces, types, and enums
└── utils/           # Helper functions for winner determination
