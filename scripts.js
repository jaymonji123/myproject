document.getElementById('fetchMessageBtn').addEventListener('click', function() {
    fetch('https://cbhtfxu64d.execute-api.us-east-1.amazonaws.com/prod')
        .then(response => response.text())
        .then(data => {
            document.getElementById('message').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching the message:', error);
            document.getElementById('message').innerHTML = 'Failed to fetch the message.';
        });
});
