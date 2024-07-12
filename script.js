document.getElementById('create-vps-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('close-popup-btn').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
    window.location.href = 'create-vps.html';
});
