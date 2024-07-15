import { useEffect, useState } from "react"
import { vctTeams } from "../App"
import { simulateBestOf } from "../utils/simulator"

interface IGroupStageProps {
    setWinners: (winners: ITally) => void
}

interface ITally {
    [key: string]: number
}

const GroupStage = (props: IGroupStageProps) => {
    const { setWinners } = props

    const [matchups, setMatchups] = useState<any[]>([])

    const teamTallies: ITally = vctTeams.reduce((acc, team) => {
        acc[team.name] = 0
        return acc
    }, {})

    useEffect(() => {
        vctTeams.map((teamA, i) =>
            vctTeams.slice(i + 1).map((teamB, j) => {
                const match = simulateBestOf(teamA, teamB, 3)

                setMatchups(prev => [
                    ...prev,
                    {
                        [`${teamA.name} vs ${teamB.name}`]: match,
                    },
                ])

                teamTallies[match.winner]++
            }),
        )

        console.log(typeof teamTallies, teamTallies)

        setWinners(teamTallies)
    }, [])

    return (
        <div className="flex flex-wrap flex-shrink gap-8">
            {matchups.map((matchup, i) => {
                const [teams] = Object.keys(matchup)
                const { teamA, teamB } = matchup[teams]

                return (
                    <div key={i} className="">
                        <h3 className="text-xl font-bold">{teams}</h3>
                        <p>
                            {teamA.score > teamB.score
                                ? `${teamA.name} wins ${teamA.score}-${teamB.score}`
                                : `${teamB.name} wins ${teamB.score}-${teamA.score}`}
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default GroupStage
export type { ITally }
