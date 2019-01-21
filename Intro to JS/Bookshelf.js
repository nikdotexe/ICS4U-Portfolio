var book = [
    {title: "The Giver",
    stars: 4,
    author: "jeff 2"
    },
    {title: "Jeff",
    stars: 99,
    author: "jeff"
    }
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);
for (var i=0; i < book.length; i++){
fill(214, 255, 219);
rect(10 + i*100, 20, 90, 100);
fill(0, 0, 0);
text(book[i].title, 15+i* 100, 29, 70, 100);
text(book[i].author, 15+i* 100, 50, 70, 100);
for (var s = 0; s < book[i].stars; s++) {
    image(getImage("cute/Star"), 13 + s * 20 + i*100, 90, 20, 30);
    }
}
