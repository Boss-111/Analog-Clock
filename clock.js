let btn=document.getElementById('Paused');

setInterval(()=>{
    const d=new Date();
    let mtime=d.getMinutes();
    let stime=d.getSeconds();
    let htime=d.getHours();
    hrotation= 30*htime + mtime/2;
    mrotation= 6*mtime;
    srotation= 6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`;
    minute.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
    btn.innerHTML='Pause';
    },1000) 










