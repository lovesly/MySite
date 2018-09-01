var dancingWords = [];

function setup() {
    createCanvas(600, 600);  
    const p = createP('I learn in this Letter, that Don Peter of Aragon, '
    + 'comes this night to Messina').addClass('text');
    p.position(50, 200);

    // This line grabs the paragraph just created, but it would 
    // also grab any other elements with class 'text' in the HTML
    // page.
    var texts = selectAll('.text');

    for (var i=0; i<texts.length; i++) {
        var paragraph = texts[i].html();
        var words = paragraph.split(/\s|,\s/);
        console.log(words);
        for (var j=0; j<words.length; j++) {   
            var spannedWord = createSpan(words[j]);
            spannedWord.addClass('spanWords');
            spannedWord.mouseOver(function() {
                // how can I get dw here?
                this.addClass('hover');
            });
            spannedWord.mouseOut(function() {
                this.removeClass('hover');
            });
            var dw = new DanceSpan(spannedWord, random(600), random(200));
            dancingWords.push(dw);
        }
    }
}

function draw() {
    for (var i=0; i<dancingWords.length; i++) {
        dancingWords[i].brownian();
    }
}

