"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons";

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
};

export default function Home() {
  const [initialTime, setInitialTime] = useState<number>(300);
  const [player1Time, setPlayer1Time] = useState<number>(initialTime);
  const [player2Time, setPlayer2Time] = useState<number>(initialTime);
  const [currentPlayer, setCurrentPlayer] = useState<1 | 2 | null>(null);
  const [timerRunning, setTimerRunning] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    setPlayer1Time(initialTime);
    setPlayer2Time(initialTime);
  }, [initialTime]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (timerRunning && currentPlayer !== null && !paused) {
      intervalId = setInterval(() => {
        if (currentPlayer === 1) {
          setPlayer1Time((prevTime) => {
            if (prevTime <= 0) {
              clearInterval(intervalId);
              return 0;
            }
            return prevTime - 1;
          });
        } else {
          setPlayer2Time((prevTime) => {
            if (prevTime <= 0) {
              clearInterval(intervalId);
              return 0;
            }
            return prevTime - 1;
          });
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [timerRunning, currentPlayer, paused]);

  const handlePlayerButtonClick = (player: 1 | 2) => {
    if (!timerRunning) {
      setCurrentPlayer(player);
      setTimerRunning(true);
    } else if (currentPlayer === player) {
      setTimerRunning(false);
    } else {
      setCurrentPlayer(player);
    }
    setPaused(false);
  };

  const handleReset = () => {
    setTimerRunning(false);
    setCurrentPlayer(null);
    setPlayer1Time(initialTime);
    setPlayer2Time(initialTime);
    setPaused(false);
  };

  const handlePause = () => {
    setPaused(!paused);
    setTimerRunning(!paused);
  };

  const handleInitialTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseInt(e.target.value);
    if (!isNaN(newTime) && newTime > 0) {
      setInitialTime(newTime);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Time Adjustment */}
      <div className="p-4 flex justify-center items-center">
        <label htmlFor="initialTime" className="mr-2">
          Initial Time (seconds):
        </label>
        <Input
          type="number"
          id="initialTime"
          value={initialTime}
          onChange={handleInitialTimeChange}
          className="w-24"
        />
      </div>

      <div className="flex-1 flex flex-col md:flex-row">
        {/* Player 1 */}
        <div
          className={`flex-1 flex flex-col justify-center items-center p-4 border-r border-foreground ${
            currentPlayer === 1 ? "bg-accent/20" : ""
          }`}
        >
          <div className="text-8xl font-mono mb-4">
            {formatTime(player1Time)}
          </div>
          <Button
            className="w-48 h-16 text-2xl"
            onClick={() => handlePlayerButtonClick(1)}
            disabled={player1Time <= 0}
          >
            Player 1
          </Button>
        </div>

        {/* Player 2 */}
        <div
          className={`flex-1 flex flex-col justify-center items-center p-4 border-l border-foreground ${
            currentPlayer === 2 ? "bg-accent/20" : ""
          }`}
        >
          <div className="text-8xl font-mono mb-4">
            {formatTime(player2Time)}
          </div>
          <Button
            className="w-48 h-16 text-2xl"
            onClick={() => handlePlayerButtonClick(2)}
            disabled={player2Time <= 0}
          >
            Player 2
          </Button>
        </div>
      </div>

      {/* Pause and Reset Buttons */}
      <div className="p-4 flex justify-center space-x-4">
        <Button onClick={handlePause} className="w-32 h-12">
          {paused ? "Resume" : "Pause"}
        </Button>
        <Button onClick={handleReset} className="w-32 h-12">
          <Icons.reset className="mr-2" />
          Reset
        </Button>
      </div>
    </div>
  );
}
