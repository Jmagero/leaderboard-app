
const postScore = async (name,score) => {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/uxKPhNmkhTU4dRzRbrZq/scores/', 
        {method: 'POST',
        body: JSON.stringify({user: name, score: score}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then(
            response => {
                return response.json();
        }).then( result => console.log(result));
};

export default postScore