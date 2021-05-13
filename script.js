function showTimer() {
    var time = "00: 01";
    timer = document.getElementById("timer");
    timer.innerHTML = time;
    my_timer = setInterval(function(){
        var min = 0;
        var sec = 0;
        var time_up = false;
        t = time.split(":");
        min = parseInt(t[0]);
        sec = parseInt(t[1]);

        hide = document.getElementById("hide");

        if(sec == 0) {
            if( min>0 ) {
                sec = 59;
                min--;
            }
            else {
                time_up = true;
            }
        }
        else {
            sec--;
        }
        if(min<10) 
            min = "0" + min;
        if(sec<10) 
            sec = "0" + sec;
        time = min + " :" + sec;
        if(time_up) {
            time = "Time UP";
        }
        timer = document.getElementById("timer");
        timer.innerHTML = time;
        if(time_up==true) {
            clearInterval(my_timer);
            hide.style.display = "block";
        }
    }, 1000)
}

var stop = document.getElementsByClassName("stop");
var container2 = document.getElementsByClassName("container2");
var container = document.getElementsByClassName("container");
var split2 = document.getElementsByClassName("split2");
var main = document.getElementsByClassName("main");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div5 = document.getElementById("div5");
var div6 = document.getElementById("div6");
var drop = document.getElementsByClassName("drop");
var body = document.getElementsByTagName("body");

function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    div1.innerHTML = "Drop the beaker here";
    div1.style.backgroundColor = "yellow";
    ev.dataTransfer.setData("text", ev.target.id);
}

function drops(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var beakerTilt = ev.target.appendChild(document.getElementById(data));
    
    div1.style.backgroundImage = "url('beakerTilt.png')";
    div1.innerHTML = "";
    div1.style.backgroundColor = "gainsboro";
    beakerTilt.style.backgroundSize = "100% 300%";
    beakerTilt.style.height = "145px";
    beakerTilt.style.width = "153px";

    var btn = document.createElement('button');
    btn.innerText = "STOP";
    document.body.appendChild(btn);

    btn.style.backgroundColor = "yellow";
    btn.style.padding = "10px 6px";
    btn.style.border = "1px solid black";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    btn.style.width = "4%";
    btn.style.boxShadow = "7px 7px 7px gray";
    btn.style.fontWeight = "bold";
    btn.setAttribute('onclick',"abc()");
    btn.style.position ="absolute";
    btn.style.top = "313px";
    btn.style.left = "424px";

    drop[0].style.display = "block";
} 

function abc() {
    drop[0].style.display = "none";
}

function allowDrop2(ev2) {
    ev2.preventDefault();
  }
  
  function drag2(ev2) {
    div2.style.border = "1px solid black";
    ev2.dataTransfer.setData("text", ev2.target.id);
  }
  
  function drops2(ev2) {
    ev2.preventDefault();    
    var data = ev2.dataTransfer.getData("text");
    var stand = ev2.target.appendChild(document.getElementById(data));
    stand.style.backgroundSize = "100% 300%";
    stand.style.height = "453px";
    stand.style.width = "488px";
    stand.style.marginLeft = "-130px";
    div2.style.border = "1px solid gainsboro";
    // div2.style.cursor = "default";
}

function allowDrop4(ev4) {
    ev4.preventDefault();
  }
  
  function drag4(ev4) {
    div4.style.border = "1px solid black";
    ev4.dataTransfer.setData("text", ev4.target.id);
  }
  
  function drops4(ev4) {
    ev4.preventDefault();
    var data = ev4.dataTransfer.getData("text");
    var funnel = ev4.target.appendChild(document.getElementById(data));
    funnel.style.backgroundSize = "100% 300%";
    funnel.style.height = "200px";
    funnel.style.width = "200px";
    // funnel.style.marginLeft = "-100px";
    div4.style.border = "1px solid gainsboro";
}

function allowDrop5(ev5) {
    ev5.preventDefault();
  }
  
  function drag5(ev5) {
    div5.style.border = "1px solid black";
    ev5.dataTransfer.setData("text", ev5.target.id);
  }
  
  function drops5(ev5) {
    ev5.preventDefault();
    var data = ev5.dataTransfer.getData("text");
    ev5.target.appendChild(document.getElementById(data));
    div5.style.border = "1px solid gainsboro";
}

function allowDrop6(ev6) {
    ev6.preventDefault();
  }
  
  function drag6(ev6) {
    div6.style.border = "1px solid black";
    ev6.dataTransfer.setData("text", ev6.target.id);
  }
  
  function drops6(ev6) {
    ev6.preventDefault();
    var data = ev6.dataTransfer.getData("text");
    ev6.target.appendChild(document.getElementById(data));
    div6.style.border = "1px solid gainsboro";
}

function show_hide() {
    container[0].style.display = "none";    
    container2[0].style.display = "block";
    stop[0].style.display = "none";
    div1.style.display = "none";
    div2.style.display = "none";
    split2[0].style.display = "none";
    main[0].style.border = "none";
    document.documentElement.scrollTop = 0;
}

waterlvl = document.getElementsByClassName("waterlvl");
var position = 810;
var finalp = position - 100 ;
var Iheight = 0;
var waterLevel;
var counter = document.getElementsByClassName("counter");
var i=0;
function func() {
    if(i==0) {
        drop[1].style.display = "block";
        i++;
        waterLevel = setInterval(function func1(){
            position -= 10;
            Iheight +=10;
            waterlvl[0].style.top = position + "px";
            waterlvl[0].style.height = Iheight + "px";
            counter[0].innerText = "Number of drops droped = " + Iheight/10;
            if(position<= finalp) {
                clearInterval(waterLevel);
            }
        }, 1000);
    }
    else {
        drop[1].style.display = "none";
        i--;
        clearInterval(waterLevel);
    }
}






