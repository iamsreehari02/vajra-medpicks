import React, { useState, useEffect } from "react";

const parseTime = (timeString) => {
  const regex = /(\d+)\s*Days\s*(\d+)\s*h\s*:\s*(\d+)\s*m\s*:\s*(\d+)\s*s/;
  const matches = timeString.match(regex);

  if (matches) {
    const days = parseInt(matches[1], 10);
    const hours = parseInt(matches[2], 10);
    const minutes = parseInt(matches[3], 10);
    const seconds = parseInt(matches[4], 10);

    return seconds + minutes * 60 + hours * 3600 + days * 86400;
  }
  return 0;
};

const Countdown = ({ initialTime }) => {
  const totalSeconds = parseTime(initialTime);
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${days < 10 ? "0" : ""}${days} Days ${
      hours < 10 ? "0" : ""
    }${hours} h : ${minutes < 10 ? "0" : ""}${minutes} m : ${
      secs < 10 ? "0" : ""
    }${secs} s`;
  };

  return <span className="text-primaryColor">{formatTime(timeLeft)}</span>;
};

export default Countdown;
