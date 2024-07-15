import React from "react"
import { simulateBestOf } from "../utils/simulator"

interface IPlayoffsStageProps {
    entries: any
}

const PlayoffsStage = (props: IPlayoffsStageProps) => {
    const { entries } = props

    console.log(entries)

    const matchup = simulateBestOf(entries[0], entries[1], 5)

    return (
        <div>
            {matchup.teamA.score > matchup.teamB.score
                ? `${matchup.teamA.name} wins ${matchup.teamA.score}-${matchup.teamB.score}`
                : `${matchup.teamB.name} wins ${matchup.teamB.score}-${matchup.teamA.score}`}
        </div>
    )
}

export default PlayoffsStage
