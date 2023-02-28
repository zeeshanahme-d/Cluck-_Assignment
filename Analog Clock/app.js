setInterval(() => {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let h_rotation = 30 * h + m / 2;
    let m_rotation = 6 * m;
    let s_rotation = 6 * s

    let a = houre.style.transform = `rotate(${h_rotation}deg)`
    let b = minet.style.transform = `rotate(${m_rotation}deg)`
    let c = seconed.style.transform = `rotate(${s_rotation}deg)`
}, 1000);