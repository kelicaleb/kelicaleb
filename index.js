function call(){
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(data => data.forEach(data => special(data)))
}
function special(animal){
    let ul = document.createElement("ul");
    ul.setAttribute("class", "ul");
    let card = document.createElement("li");
    card.setAttribute("class", "card");
    card.innerHTML = `
    <img class="image" src="${animal.image}"/>
    <h3 class="headerjs">${animal.name}</h3>
    <h3 class="headerjs>${animal.vote}</h3>`
    let center = document.createElement('div');
    center.setAttribute("class", "center");
    animal.votes = 0;
    var likeButton = document.createElement('button');
    likeButton.setAttribute("class", "btn btn-primary");
    likeButton.setAttribute("style", "margin-right:230px");
    likeButton.innerHTML = 'Like';
    likeButton.onclick = function() {
      animal.votes++;
      likeButton.innerHTML = 'Likes: ' + animal.votes;
    };
    /* create a button that decrements the number of likes */
    var dislikeButton = document.createElement('button');
    dislikeButton.setAttribute("class", "btn btn-danger");
    dislikeButton.setAttribute("style", "margin-right:6px");
    dislikeButton.innerHTML = 'Dislike';
    dislikeButton.onclick = function() {
      animal.votes--;
      likeButton.innerHTML = 'Likes: ' + animal.votes;
    };
    document.body.appendChild(dislikeButton);
    document.body.append(ul);
    ul.append(card);
    card.append(center);
    center.append(likeButton);
    center.append(dislikeButton);

}
call()



/*<button class="btn btn-primary" id="but1"  style='margin-right:76px'>like</button>
<button class="btn btn-danger"  id="but2"  style='margin-right:16px'>dislike</button>`*/