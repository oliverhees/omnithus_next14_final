"use client";
import { ThemeContext } from "@/app/layout";
import { useContext } from "react";
import GaugeComponent from "react-gauge-component";

const userFirstname = {
  name: "Oliver",
};

function WelcomeHero() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex w-full justify-between rounded-lg bg-white px-[24px] py-3 dark:bg-darkblack-600 xl:w-66">
      <div className="flex flex-col w-1/2 mb-2 border-bgray-300 p-4 dark:border-darkblack-400">
        <h2 className="text-2xl font-semibold dark:text-white">
          Welcome back {userFirstname.name}
        </h2>
        <h3 className="text-1xl dark:text-white">
          It is a wonderfull day to make the world better with ai
        </h3>
        <p className="dark:text-gray-200 pt-4 mt-8 text-lg">
          Your subscription plan ist "
          <span className="font-semibold dark:text-white">Premium</span>".
        </p>
        <p className="dark:text-gray-200">
          You have{" "}
          <span className="font-semibold dark:text-white">39,212 Tokens</span>{" "}
          left and your expire in 28 Days.
        </p>
        <button className="mt-8 max-w-sm dark:bg-[#22C55E] dark:text-white font-semibold p-2 rounded-lg">
          Upgrade Plan
        </button>
      </div>
      <div className="flex flex-col w-1/2 justify-start justify-items-start border-bgray-300 p-4 dark:border-darkblack-400">
        <GaugeComponent
          style={{ width: "110%" }}
          type="semicircle"
          arc={{
            width: 0.15,
            padding: 0.005,
            cornerRadius: 1,
            // gradient: true,
            subArcs: [
              {
                limit: 14000,
                color: "#EA4228",
                showTick: true,
                tooltip: {
                  text: "Empty Tokens!",
                },
              },
              {
                limit: 21000,
                color: "#F5CD19",
                showTick: true,
                tooltip: {
                  text: "OK temperature!",
                },
              },

              {
                color: "#5BE12C",
                tooltip: {
                  text: "Too high temperature!",
                },
              },
            ],
          }}
          pointer={{
            color: "#345243",
            length: 0.8,
            width: 15,
            // elastic: true,
          }}
          labels={{
            valueLabel: { formatTextValue: (value) => `${value} Tokens` },
            tickLabels: {
              type: "outer",
              valueConfig: {
                formatTextValue: (value) => `${value} Tokens`,
                fontSize: 10,
              },
              // ticks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
            },
          }}
          value={25000}
          minValue={0}
          maxValue={50000}
        />
      </div>
    </div>
  );
}

export default WelcomeHero;
