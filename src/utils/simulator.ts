interface Team {
    name: string
    odds: number
    score?: number
}

const simulateMapWinner = (teamAOdds: number, teamBOdds: number) => {
    let teamA = 0 // higher % team
    let teamB = 0 // lower % team
    do {
        const rand = Math.random()

        rand < teamAOdds / (teamAOdds + teamBOdds) ? teamA++ : teamB++
    } while (teamA < 13 && teamB < 13)

    return teamA > teamB ? "teamA" : "teamB"
}

const simulateBestOf = (teamA: Team, teamB: Team, bestOf: number) => {
    let teamAWins = 0
    let teamBWins = 0

    do {
        const result = simulateMapWinner(teamA.odds, teamB.odds)

        result === "teamA" ? teamAWins++ : teamBWins++
    } while (
        teamAWins < (bestOf - 1) / 2 + 1 &&
        teamBWins < (bestOf - 1) / 2 + 1
    )

    const winnerResult = {
        teamA: { ...teamA, score: teamAWins },
        teamB: { ...teamB, score: teamBWins },
        winner: teamAWins > teamBWins ? teamA.name : teamB.name,
    }
    return winnerResult
}

export { simulateMapWinner, simulateBestOf }
export type { Team }
