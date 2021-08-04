const getScores = async () => {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uxKPhNmkhTU4dRzRbrZq/scores/')
    const data = await response.json();
    const result = await data.result
    return result
}
