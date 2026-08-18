import "./index.css"

const SentimentChart = (props) => {
    const { positive, negative, neutral, total } = props

    if (total === 0) return null

    const posPercent = Math.round((positive / total) * 100)
    const negPercent = Math.round((negative / total) * 100)
    const neuPercent = Math.round((neutral / total) * 100)

    const bars = [
        { label: "Positive 😊", count: positive, percent: posPercent, color: "#22c55e", bg: "#dcfce7" },
        { label: "Neutral 😐", count: neutral, percent: neuPercent, color: "#94a3b8", bg: "#f1f5f9" },
        { label: "Negative 😠", count: negative, percent: negPercent, color: "#ef4444", bg: "#fee2e2" },
    ]

    return (
        <div className="sentiment-chart">
            <h3 className="chart-title">Sentiment Breakdown</h3>
            <p className="chart-subtitle">Based on {total} post titles</p>

            <div className="bars-container">
                {bars.map(bar => (
                    <div key={bar.label} className="bar-row">
                        <span className="bar-label">{bar.label}</span>
                        <div className="bar-track">
                            <div
                                className="bar-fill"
                                style={{ width: `${bar.percent}%`, backgroundColor: bar.color }}
                            />
                        </div>
                        <span className="bar-stats">{bar.count} <span className="bar-percent">({bar.percent}%)</span></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SentimentChart
