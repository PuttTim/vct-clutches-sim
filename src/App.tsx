import { useState } from "react"
import "./App.css"
import GroupStage, { ITally } from "./components/GroupStage"
import { Team } from "./utils/simulator"
import PlayoffsStage from "./components/PlayoffsStage"

const vctTeams: Team[] = [
    { name: "PRX", odds: 1.786 },
    { name: "GENG", odds: 1.912 },
    { name: "DRX", odds: 2.314 },
    { name: "TS", odds: 1.574 },
    { name: "BLEED", odds: 1.427 },
    { name: "T1", odds: 1.875 },
    { name: "TLN", odds: 1.458 },
    { name: "RRQ", odds: 1.41 },
    { name: "ZETA", odds: 1.57 },
    { name: "GE", odds: 1.361 },
    { name: "DFM", odds: 1.357 },
]

function App() {
    const [groupStageWinners, setGroupStageWinners] = useState<ITally>()
    const [groupKey, setGroupKey] = useState(0)

    return (
        <div className="flex flex-col justify-items-center items-center w-[80vw] pt-4 pb-6">
            <h1 className="text-3xl font-bold">
                VCT 2024 Pacific Clutch based tournament simulator
            </h1>
            <button
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded w-1/4 my-4"
                onClick={() => {
                    setGroupKey(Math.random())
                }}>
                Re-roll
            </button>

            <h2 className="text-2xl font-semibold py-4">
                Current Team Clutch Rates
            </h2>
            <div className="flex gap-4 flex-wrap justify-center">
                {vctTeams.map(({ name, odds }) => {
                    return (
                        <p>
                            <span className="font-bold">{name}</span> -{" "}
                            {odds.toFixed(3)}%
                        </p>
                    )
                })}
            </div>

            <h2 className="text-2xl font-semibold py-4">
                Group Stage Matchups (55 matchups)
            </h2>

            <GroupStage setWinners={setGroupStageWinners} key={groupKey} />

            <h2 className="text-2xl font-semibold py-4">
                Group Stage Wins (maximum 10)
            </h2>
            <div className="flex max-w-[40%] flex-wrap gap-3">
                {Object.entries(groupStageWinners || {})
                    .sort((a, b) => b[1] - a[1])
                    .map(([team, wins], i) => (
                        <h4 key={i}>
                            {team} ({wins} wins){" "}
                        </h4>
                    ))}
            </div>
            <h2 className="text-2xl font-semibold py-4">
                Top 4 teams that will advance to the Playoffs Stage
            </h2>

            <h2 className="flex justify-evenly w-full">
                {Object.entries(groupStageWinners || {})
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 4)
                    .map(([team, wins], i) => (
                        <p className="text-2xl">
                            <span className="font-bold">{team}</span> ({wins})
                        </p>
                    ))}
            </h2>

            {/* <PlayoffsStage
                entries={Object.entries(groupStageWinners || {})
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 2)
                    .map(([team]) => ({
                        ...vctTeams.find(({ name }) => name === team),
                    }))}
            /> */}
        </div>
    )
}

export default App
export { vctTeams }
