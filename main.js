$(document).ready(function () {
  // The Markov Generator
  // First argument is N-gram length, second argument is max length of generated text
  var markov = new RiMarkov(4);

  markov.loadFrom('poetry.txt', function(){
    if(markov.ready()) {

      for(let i =0;i<7;i++){
        let ul = $('#line');
        var result = markov.generateSentences(1);
        let li = "<li>" + result[0] + "</li>";
        ul.append(li);
      }
    }
  });

});
