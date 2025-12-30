# Snake Game in C (Windows Console)

A lightweight, high-performance implementation of the classic Snake game written in **C**. This version is specifically optimized for **Windows environments** using the Win32 API to ensure a flicker-free gaming experience without the need for external libraries like `ncurses`.

## Features

* **Flicker-Free Rendering**: Uses native Windows `SetConsoleCursorPosition` instead of `system("cls")` for smooth visuals.
* **Low Resource Usage**: Minimal CPU and memory footprint.
* **Intuitive Controls**: Classic WASD keyboard mapping.
* **No External Dependencies**: Compiles directly with standard Windows C compilers (MinGW, MSVC).

## Game Mechanics

* **Objective**: Eat the food (`*`) to grow your snake and increase your score.
* **Growth**: Each piece of food adds 10 points to your score and increases the tail length.
* **Game Over Conditions**:
* Colliding with the borders (`-` and `|`).
* Colliding with the snake's own tail (`o`).



## Controls

| Key | Action |
| --- | --- |
| **W** | Move Up |
| **A** | Move Left |
| **S** | Move Down |
| **D** | Move Right |
| **X** | Exit Game |

## Technical Implementation Details

The project demonstrates several core programming concepts:

* **Win32 API Integration**: Handling console handles and cursor visibility.
* **Non-blocking Input**: Using `_kbhit()` and `_getch()` from `conio.h` for real-time responsiveness.
* **Game Loop Architecture**: Separation of `Input`, `Logic`, and `Rendering` phases.
* **Dynamic Coordinate Mapping**: Managing an array-based tail system for movement tracking.

## Getting Started

### Prerequisites

* A Windows Operating System.
* A C compiler (e.g., **MinGW** via CLion, or **MSVC** via Visual Studio).

### Compilation

If using a terminal (like PowerShell or CMD with MinGW), run:

```bash
gcc main.c -o SnakeGame.exe

```

### Execution

Simply run the generated executable:

```bash
./SnakeGame.exe

```

## Project Structure

* `main.c`: Contains the entire game logic, including the setup, game loop, and rendering engine.
* `HEIGHT` / `WIDTH`: Macros to easily adjust the playing field dimensions.

---

**Developed as a technical exercise in C and Windows System Programming.**

Would you like me to add a section on how to extend the game (e.g., adding levels or high scores)?
