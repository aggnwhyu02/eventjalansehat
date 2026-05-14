
import React from "react";

export default function App() {
  const runners = [
    {
      name: "Agung Wahyu",
      distance: "5.2 KM",
      pace: "5:10 /km",
      status: "Running",
    },
    {
      name: "Rizky",
      distance: "3.8 KM",
      pace: "5:40 /km",
      status: "Running",
    },
    {
      name: "Fajar",
      distance: "7.1 KM",
      pace: "4:55 /km",
      status: "Finished",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold">Jogging Event</h1>
            <p className="text-zinc-400 mt-2">
              Realtime Tracking & Leaderboard
            </p>
          </div>

          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-2xl font-semibold shadow-lg">
            Start Run
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">
            <p className="text-zinc-400 mb-2">Total Participants</p>
            <h2 className="text-5xl font-bold">128</h2>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">
            <p className="text-zinc-400 mb-2">Distance Today</p>
            <h2 className="text-5xl font-bold">742 KM</h2>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">
            <p className="text-zinc-400 mb-2">Active Runners</p>
            <h2 className="text-5xl font-bold">46</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Leaderboard</h2>
              <span className="text-orange-400">Live</span>
            </div>

            <div className="space-y-4">
              {runners.map((runner, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 rounded-2xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg">{runner.name}</h3>
                      <p className="text-zinc-400 text-sm">{runner.status}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-xl">{runner.distance}</p>
                    <p className="text-zinc-400 text-sm">{runner.pace}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Live Tracking</h2>
              <span className="text-green-400">GPS Active</span>
            </div>

            <div className="bg-zinc-800 rounded-3xl h-[420px] flex items-center justify-center border border-zinc-700">
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  📍
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  Interactive Map
                </h3>

                <p className="text-zinc-400 max-w-sm">
                  Modern running dashboard inspired by Strava & Nike Run Club.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
