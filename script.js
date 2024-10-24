const meme = document.getElementById('meme');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay'); 
let lastCloseTime = 0;

meme.addEventListener('mouseover', function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    closeBtn.style.display = 'block'; 
});

meme.addEventListener('mouseout', function() {
    
});

function handleCloseClick() {
    const currentTime = Date.now();

    if (currentTime - lastCloseTime < 2000) {
        closePopup(); 
    } else {
        moveCloseButton(); 
    }

    lastCloseTime = currentTime; 
}

function moveCloseButton() {
    const positions = [
        { top: '5px', left: '5px' }, 
        { bottom: '5px', right: '5px' }, 
        { bottom: '5px', left: '5px' } 
    ];

    
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];

    
    closeBtn.style.top = randomPosition.top || 'auto';
    closeBtn.style.bottom = randomPosition.bottom || 'auto';
    closeBtn.style.left = randomPosition.left || 'auto';
    closeBtn.style.right = randomPosition.right || 'auto';
}

function closePopup() {
    popup.style.display = 'none';
    closeBtn.style.display = 'none'; 
    overlay.style.display = 'none';
    closeBtnClicked = false; 
}