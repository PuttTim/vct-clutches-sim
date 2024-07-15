interface Team {
    name: string
    odds: number
}

// extend Team to add a scoreline property
interface TeamWithScore extends Team {
    score: number
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

    for (let i = 0; i < bestOf; i++) {
        const result = simulateMapWinner(teamA.odds, teamB.odds)

        result === "teamA" ? teamAWins++ : teamBWins++
    }

    const winnerResult: TeamWithScore =
        teamAWins > teamBWins
            ? { ...teamA, score: teamAWins }
            : { ...teamB, score: teamBWins }

    return winnerResult
}

export { simulateMapWinner, simulateBestOf }
export type { Team }
