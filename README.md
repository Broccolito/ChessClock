# ChessClock

## Overview

ChessClock is a simple and intuitive application designed to serve as a chess clock for chess games. It provides a clear, split-screen interface for two players, along with essential features like time adjustment, pause, reset, and distinct visual cues.

## Core Features

-   **Timer Display**: Two large, clear digital-style timers displaying the remaining time for each player.
-   **Player Buttons**: Two large buttons, one for each player, to start/stop their respective timers. Player 1's button is red, and Player 2's button is green.
-   **Pause Button**: A central pause button to halt both timers simultaneously.
-   **Reset Button**: A button to reset the timers to the initial set time.
-   **Time Adjustment**: An input field to set the initial time for each player before starting the game.

## UI/UX Design

-   **Layout**: A split-screen layout with each player's timer and button occupying one half of the screen. The pause button is located in the middle of the screen, devided by the line deviding the two players clock.
-   **Colors**:
    -   Primary color: White or light gray for the background.
    -   Secondary color: Dark gray for text and borders.
    -   Accent: Blue (#4287f5) to highlight interactive elements.
-   **Font**: Large, clear digital-style font for displaying the remaining time.
-   **Icons**: Simple icon for the reset button (e.g., a circular arrow).

## Technologies Used

-   **Next.js**: React framework for building the user interface.
-   **Tailwind CSS**: Utility-first CSS framework for styling.
-   **ShadCN Components**: Reusable UI components.
-   **Lucide React**: Icons for the reset button.

## Setup Instructions

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/Broccolito/ChessClock
    cd ChessClock
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Run the development server**:

    ```bash
    npm run dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Usage

1.  **Set Initial Time**:
    -   Enter the desired initial time (in seconds) in the input field at the top of the screen.
2.  **Start the Game**:
    -   Player 1 presses the red button to start Player 2's timer.
    -   Player 2 presses the green button to start Player 1's timer.
3.  **Pause the Game**:
    -   Press the "Pause" button to stop both timers. Press it again to resume.
4.  **Reset the Game**:
    -   Press the "Reset" button to reset both timers to the initial time.

## File Structure

-   `components.json`: Configuration for ShadCN UI components.
-   `next.config.ts`: Next.js configuration file.
-   `package.json`: Node.js package file with dependencies and scripts.
-   `src/ai/`: (Currently empty) Directory for future AI-related code using Genkit.
-   `src/app/`: Contains the main application logic.
    -   `globals.css`: Global CSS file for Tailwind CSS configurations.
    -   `layout.tsx`: Root layout for the Next.js application.
    -   `page.tsx`: Main component for the chess clock application.
-   `src/components/`: Reusable UI components.
    -   `icons.ts`: Definition of icons used in the application.
    -   `ui/`: ShadCN UI components.
-   `src/hooks/`: Custom React hooks.
    -   `use-mobile.tsx`: Hook to determine if the app is running on a mobile device.
-   `src/lib/`: Utility functions.
    -   `utils.ts`: Utility functions for Tailwind CSS and class merging.
-   `tailwind.config.ts`: Tailwind CSS configuration file.
-   `tsconfig.json`: TypeScript configuration file.

## Styling

The application uses Tailwind CSS for styling. The color scheme is defined in `src/app/globals.css` using HSL CSS variables:

-   **Background**: Light gray in light mode, dark gray in dark mode.
-   **Foreground**: Dark gray in light mode, light gray in dark mode.
-   **Accent**: Blue (#4287f5) for interactive elements.

Custom CSS classes and styles are applied to various components to achieve the desired look and feel.

## Future Enhancements

-   Implement a settings menu to customize the timer display and sound effects.
-   Add support for different time control methods (e.g., increment, delay).
-   Incorporate AI features using Genkit for move suggestions or game analysis (future enhancement).

## Contributing

Feel free to contribute to the project by submitting pull requests, reporting issues, or suggesting new features.
