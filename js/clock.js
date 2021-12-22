(function(){
    function updateClock(){
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = new(Date).toLocaleTimeStrinf();
    
    }
    updateClock();
    setInterval(updateClock, 1000);
})();