"use client";
import React from "react";
import CountUp from "react-countup/build/CountUp";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        prefix="EUR"
        duration={2}
        end={amount}
        decimal=","
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
