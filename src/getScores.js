const boardScore = document.querySelector('.leaderboard-scores');
const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uxKPhNmkhTU4dRzRbrZq/scores/');
  const data = await response.json();
  const result = await data.result;
  return result;
};

const addUser = (name, score) => {
  const li = document.createElement('li');
  li.textContent = `${name}:${score}`;
  boardScore.appendChild(li);
};

const displayUsers = async () => {
  const scores = await getScores();
  scores.forEach((element) => {
    addUser(element.user, element.score);
  });
};

export default displayUsers;