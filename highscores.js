const highScoresList = document.querySelector('#highScoresList')
const mostRecentScore = JSON.parse(localStorage.getItem('mostRecentScore')) || []

highScoresList.innerHTML ={mostRecentScore};

// mostRecentScore.map(score => {
//     return `<li class="high-score">${mostRecentScore}</li>`
// }).join('')