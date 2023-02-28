function clock(){

    let a = new Date();
    let h = a.getHours();
    let m = a.getMinutes();
    let s = a.getSeconds();
    let day = a.getDay()
    let c;
    
    if (h > 12) {
        h = h - 12
        c = "PM"
    } else {
        c = "AM"
    }
    
    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }
    
    document.getElementById('time').innerHTML = h + " : " + m + " : " + s + " : " + c;
    setInterval(clock,1000)
}


