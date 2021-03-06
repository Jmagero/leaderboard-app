const boardScore = document.querySelector('.leaderboard-scores');
const getScores = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/OPbEMAV4vdiIu79ZtMwi/scores/');
  const data = await response.json();
  const result = await data.result;
  return result;
};

const addUser = (name, score) => {
  const li = document.createElement('li');
  li.className = 'li';
  li.textContent = `${name}:${score}`;
  boardScore.appendChild(li);
};

const displayUsers = async () => {
  const scores = await getScores();
  boardScore.innerHTML = '';
  scores.sort((a, b) => b.score - a.score)
    .forEach((element) => {
      addUser(element.user, element.score);
    });
};

export default displayUsers;