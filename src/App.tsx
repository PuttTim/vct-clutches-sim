import "./App.css"
import { simulateBestOf, Team } from "./utils/simulator"

const vctTeams: Team[] = [
    { name: "PRX", odds: 1.786 },
    { name: "GENG", odds: 1.912 },
    { name: "DRX", odds: 2.314 },
    { name: "Team Secret", odds: 1.574 },
    { name: "Bleed eSports", odds: 1.427 },
    { name: "T1", odds: 1.875 },
]

function App() {
    return (
        <>
            {/* <pre>{JSON.stringify(vctTeams, null, 4)}</pre> */}

            <h1>Valorant Champions Tour</h1>

            <h2>Best of 3</h2>
            {
                // create a list of all possible matchups
                vctTeams.map((teamA, i) =>
                    vctTeams.slice(i + 1).map((teamB, j) => {
                        const winner = simulateBestOf(teamA, teamB, 3)

                        return (
                            <div key={i + j}>
                                <h3>
                                    {teamA.name} vs {teamB.name}
                                </h3>
                                <p>
                                    Winner:{" "}
                                    {winner.name === teamA.name
                                        ? `${teamA.name} (${winner.score}-${
                                              3 - winner.score
                                          })`
                                        : `${teamB.name} (${winner.score}-${
                                              3 - winner.score
                                          })`}
                                </p>
                            </div>
                        )
                    }),
                )
            }
        </>
    )
}

export default App
