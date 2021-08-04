import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import displayUsers from './getScores';
import postScore from './postScore';

const refreshBtn = document.getElementById('refresh');
const form = document.getElementById('form');

refreshBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    displayUsers();
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    postScore(name,score)
    form.reset()
})



