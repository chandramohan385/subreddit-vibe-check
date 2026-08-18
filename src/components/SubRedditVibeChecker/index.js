import { Component } from "react";
import { ThreeDots } from "react-loader-spinner"
import Sentiment from 'sentiment';
import "./index.css"
import SearchBar from "../SearchBar";
import VibeScoreBoard from '../VibeScoreBoard'
import SentimentChart from '../SentimentChart'
import AllPosts from "../AllPosts"


const analyzer = new Sentiment();

const getSentimentLabel = (score) => {
    if (score > 2) return "Positive";
    if (score < -2) return "Negative";
    return "Neutral";
};


class SubRedditVibeChecker extends Component {
    state = {
        postList: [],
        searchInput: "",
        avgSentiment: null,
        positiveCount: 0,
        negativeCount: 0,
        neutralCount: 0,
        isLoading: false,
        errorMessage: ""
    }

    updateSearch = (event) => {
        this.setState({ searchInput: event.target.value, errorMessage: "" })
    }

    onSearchSubmit = async (event) => {
        event.preventDefault();
        const trimmedInput = this.state.searchInput.trim();
        
        if (!trimmedInput) {
            this.setState({ errorMessage: "Please enter a valid subreddit name." });
            return;
        }

        const apiUrl = `https://arctic-shift.photon-reddit.com/api/posts/search?subreddit=${trimmedInput}&limit=50&sort=desc`;

        this.setState({ isLoading: true, errorMessage: "", postList: [], avgSentiment: null });
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`API returned status: ${response.status}`);
            }
            const data = await response.json();
            
            if (!data.data || data.data.length === 0) {
                this.setState({ 
                    isLoading: false, 
                    errorMessage: `No posts found for r/${trimmedInput}.`,
                    searchInput: ""
                });
                return;
            }

            const posts = data.data.map(post => {
                const sentimentResult = analyzer.analyze(post.title);
                return {
                    title: post.title,
                    score: post.score,
                    author: post.author,
                    url: `https://www.reddit.com${post.permalink}`,
                    numComments: post.num_comments,
                    id: post.id,
                    sentiment: sentimentResult.score,
                    sentimentLabel: getSentimentLabel(sentimentResult.score)
                };
            });

            const avgSentiment = posts.reduce((sum, p) => sum + p.sentiment, 0) / posts.length;
            const positiveCount = posts.filter(p => p.sentimentLabel === "Positive").length;
            const negativeCount = posts.filter(p => p.sentimentLabel === "Negative").length;
            const neutralCount = posts.filter(p => p.sentimentLabel === "Neutral").length;

            this.setState({ 
                postList: posts, 
                avgSentiment, 
                positiveCount, 
                negativeCount, 
                neutralCount, 
                isLoading: false, 
                searchInput: "",
                errorMessage: ""
            });
        } catch (error) {
            console.error("Fetch failed:", error);
            this.setState({ 
                isLoading: false, 
                errorMessage: "Failed to fetch posts. Please check the subreddit name or try again later." 
            });
        }
    }

    render() {
        const { searchInput, postList, avgSentiment, positiveCount, negativeCount, neutralCount, isLoading, errorMessage } = this.state
        return (
            <>
                <SearchBar onChangeSearch={this.updateSearch} searchInput={searchInput} onSearchSubmit={this.onSearchSubmit} />
                {errorMessage && (
                    <div style={{ color: "#ef4444", textAlign: "center", margin: "15px 0", fontWeight: "600" }}>
                        {errorMessage}
                    </div>
                )}
                {isLoading && (
                    <div className="loader-wrapper">
                        <ThreeDots
                            height="80"
                            width="80"
                            color="#6366f1"
                            visible={true}
                        />
                    </div>
                )}
                {!isLoading && !errorMessage && <VibeScoreBoard avgSentiment={avgSentiment} />}
                {!isLoading && !errorMessage && <SentimentChart positive={positiveCount} negative={negativeCount} neutral={neutralCount} total={postList.length} />}
                {!isLoading && !errorMessage && <AllPosts posts={postList} />}
            </>
        )
    }
}


export default SubRedditVibeChecker