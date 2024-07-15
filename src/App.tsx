import { useState } from "react"
import "./App.css"
import GroupStage, { ITally } from "./components/GroupStage"
import { Team } from "./utils/simulator"
import PlayoffsStage from "./components/PlayoffsStage"

const vctTeams: Team[] = [
    { name: "PRX", odds: 1.786 },
    { name: "GENG", odds: 1.912 },
    { name: "DRX", odds: 2.314 },
    { name: "Team Secret", odds: 1.574 },
    { name: "Bleed Esports", odds: 1.427 },
    { name: "T1", odds: 1.875 },
    { name: "Talon Esports", odds: 1.458 },
    { name: "Rex Regum Qeon", odds: 1.41 },
    { name: "ZETA DIVISION", odds: 1.57 },
    { name: "Global Esports", odds: 1.361 },
    { name: "DetonatioN FocusMe", odds: 1.357 },
]

function App() {
    const [groupStageWinners, setGroupStageWinners] = useState<ITally>()

    return (
        <>
            <h1>VCT 2024 Pacific Clutch based tournament simulator</h1>
            <GroupStage setWinners={setGroupStageWinners} />

            <h2>Group Stage Wins</h2>
            <pre>{JSON.stringify(groupStageWinners, null, 4)}</pre>

            <h3>Top 4 teams that will advance to the Playoffs Stage:</h3>
            <h2 className="flex">
                {Object.entries(groupStageWinners || {})
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 4)
                    .map(([team, wins], i) => (
                        <h4 key={i}>
                            {team} ({wins} wins){" "}
                        </h4>
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
        </>
    )
}

export default App
export { vctTeams }
