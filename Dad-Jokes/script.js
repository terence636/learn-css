const button = document.querySelector('.btn');
const joke = document.querySelector('.joke');

button.addEventListener('click', () => {
  config = { headers: { Accept: 'application/json' } };
  fetch('https://icanhazdadjoke.com', config)
    .then((response) => response.json())
    .then((data) => {
      joke.innerHTML = data.joke;
    })
    .catch((err) => console.log(err));
});


// Below is using asycn await
generateJoke();

async function generateJoke() {
  config = { headers: { Accept: 'application/json' } };
  try {
    const response = await fetch('https://icanhazdadjoke.com', config);
    const json = await response.json();
    joke.innerHTML = json.joke;
  } catch {
    (err) => {
      console.log(err);
    };
  }
}
