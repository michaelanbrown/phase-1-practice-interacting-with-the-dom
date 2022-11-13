const timer = document.querySelector('#counter');
const decrementer = document.querySelector('#minus');
const incrementer = document.querySelector('#plus');
const likeButton = document.querySelector('#heart');
const pauseButton = document.querySelector('#pause');
const submitButton = document.querySelector('#submit');
const commentList = document.querySelector('#list');
const commentForm = document.querySelector('#comment-form');

let count = 0;
let countWorking = true;

pauseButton.addEventListener('click', paused);

function paused() {
    if (pauseButton.textContent === ' pause ') {
        countWorking = false;
        decrementer.disabled = true;
        incrementer.disabled = true;
        likeButton.disabled = true;
        submitButton.disabled = true;
        pauseButton.textContent = 'resume';
    } else if (pauseButton.textContent === 'resume') {
        countWorking = true;
        decrementer.disabled = false;
        incrementer.disabled = false;
        likeButton.disabled = false;
        submitButton.disabled = false;
        pauseButton.textContent = ' pause ';
    }
}

function counter() {
    setInterval(countMe, 1000)
}

function countMe() {
    if (countWorking) {
        count++;
        timer.textContent = count;
    }
}

counter()


decrementer.addEventListener('click', minus);

function minus() {
    count = count -1;
    timer.textContent = count;
}

incrementer.addEventListener('click', addition);

function addition() {
    count = count + 1;
    timer.textContent = count;
}


likeButton.addEventListener('click', numberLiked);

const listOfLikes = document.querySelector('.likes');

let likedNumbers = {};

function numberLiked() {
    if (likedNumbers[count]) {
    const li = document.querySelector(`[data-number="${count}"]`);
    likedNumbers[count]++;
    li.textContent = `${count} has been liked ${likedNumbers[count]} times`;
  } else {
    likedNumbers[count] = 1
    const li = document.createElement('li');
    li.dataset.number = count;
    li.textContent = `${count} has been liked 1 time`;
    listOfLikes.appendChild(li);
  }
}

commentForm.addEventListener('submit', event => {
    event.preventDefault();

    const p = document.createElement('p');
    const input = document.querySelector('#comment-input');
    p.textContent = input.value;
    commentList.appendChild(p)
})