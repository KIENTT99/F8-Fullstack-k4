var content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`;

var words = content.split(" ");

var i = 0;
setInterval(() => {
    var colorWord = `<span>${words[i]}</span>`;
    var temp = words.slice(0, i).concat(colorWord, words.slice(i + 1));
    var subContent = temp.join(" ");
    document.getElementById("text").innerHTML = subContent;
    if (i == words.length - 1) i = 0;
    else i++;
}, 1000);