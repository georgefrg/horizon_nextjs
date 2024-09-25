"use client";
import React from "react";
import CountUp from "react-countup/build";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        prefix="EUR"
        duration={1}
        end={amount}
        decimal=","
        decimals={2}
      />
    </div>
  );
};

export default AnimatedCounter;
