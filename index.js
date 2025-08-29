let homeScore = 0
let awayScore = 0
let homeScore_el = document.getElementById("home-score")
let awayScore_el = document.getElementById("away-score")

// HOME SCORE

function hplus1(){
    homeScore += 1
    homeScore_el.textContent = homeScore
}

function hplus2(){
    homeScore += 2
    homeScore_el.textContent = homeScore
}

function hplus3(){
    homeScore += 3
    homeScore_el.textContent = homeScore
}

function hreset(){
    homeScore = 0
    homeScore_el.textContent = 0
}

// AWAY SCORE

function aplus1(){
    awayScore += 1
    awayScore_el.textContent = awayScore
}

function aplus2(){
    awayScore += 2
    awayScore_el.textContent = awayScore
}

function aplus3(){
    awayScore += 3
    awayScore_el.textContent = awayScore
}

function areset(){
    awayScore = 0
    awayScore_el.textContent = 0
}


var Prism = function(){
      
}