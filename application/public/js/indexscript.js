const post = document.getElementById('post');

window.onload = function() {
    loadPhotos();
}

const loadPhotos = function() {
    axios
    .get('https://jsonplaceholder.typicode.com/albums/2/photos', {
      timeout: 5000
    })
    .then(res => addPhotosToDOM(res.data))
    .catch(err => console.error(err));
}

const addPhotosToDOM = (data) => {

    photos = Array.from(data);

    photos.forEach( (photo) => {

        title = photo.title;
        url = photo.url;


        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        const img = document.createElement('img');
        cardDiv.id = photo.id;
        img.src = url;

        const imgInfo = document.createElement('div');
        imgInfo.className = 'img-info';

        const heading = document.createElement('h3');
        heading.innerText = title;

        imgInfo.appendChild(heading);

        cardDiv.appendChild(img);
        cardDiv.appendChild(imgInfo);

        post.appendChild(cardDiv);

        cardDiv.addEventListener("click", fadeOut, photo.id);

    })

 var element = document.getElementById('counter');
 element.innerText = photos.length;
}

 function deleteElementfromPhotos(id) {
    var index = photos.findIndex(object => {return object.id === id});
    photos.splice(index,1);
}

function updateCounter() {
     var element = document.getElementById('counter');
     element.innerText = photos.length;
     console.log(photos)
}

      function fadeOut(id) {
        var element = document.getElementById(id.currentTarget.id);
        deleteElementfromPhotos(id);
        updateCounter();
        var op = 1; // initial opacity
        var timer = setInterval(function () {
          if (op <= 0.1) {
            clearInterval(timer);
            element.remove(); 
          }
          element.style.opacity = op;
          op -= 0.1;
        }, 50);
      }