import "./index.css"

const VibeScoreBoard = (props) => {
    const { avgSentiment } = props

    if (avgSentiment === null) return null

    let emoji, label, color
    if (avgSentiment > 2) {
        emoji = "😄"; label = "Very Positive"; color = "#22c55e"
    } else if (avgSentiment > 0) {
        emoji = "🙂"; label = "Mostly Positive"; color = "#86efac"
    } else if (avgSentiment === 0) {
        emoji = "😐"; label = "Neutral"; color = "#94a3b8"
    } else if (avgSentiment > -2) {
        emoji = "😕"; label = "Mostly Negative"; color = "#fca5a5"
    } else {
        emoji = "😠"; label = "Very Negative"; color = "#ef4444"
    }

    return (
        <div className="vibe-score-board">
            <h2>Subreddit Vibe</h2>
            <div className="vibe-emoji">{emoji}</div>
            <p className="vibe-label" style={{ color }}>{label}</p>
            <p className="vibe-score">Score: {avgSentiment.toFixed(2)}</p>
        </div>
    )
}

export default VibeScoreBoard
