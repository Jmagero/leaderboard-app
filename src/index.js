import '@fortawesome/fontawesome-free/js/all.js';
import './style.css';
import displayUsers from './getScores';

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', (e) =>{
    e.preventDefault()
    displayUsers();
});
