// Shorten the url
window.addEventListener('load', () => {
  const myFunc = async () => {
    const input = document.querySelector('.url').value;

    const encodedParams = new URLSearchParams();
    encodedParams.append('url', input);
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '7c5beedd08msh7f9ce5b1c38325fp16aa7cjsn1bd7aba7b45e',
        'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com',
      },
      body: encodedParams,
    };
    const cobody = document.querySelector('.cobody');
    const display = document.createElement('div');
    display.classList.add('output');
    cobody.appendChild(display);

    await fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
      .then((response) => response.json())
      .then((response) => {
        const div = response.result_url;
        display.innerHTML = div;
        // console.log(response);
      })
      .catch((err) => console.error(err));
  };
  const button = document.querySelector('.btn');
  button.addEventListener('click', myFunc);
});
