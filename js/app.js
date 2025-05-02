    const day = document.querySelector(".day")
    const time = document.querySelector(".time")
    const date = document.querySelector(".date")
    
    function timeClocking (){
        let date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()
        minute = minute < 10 ? `0${minute}`: minute
        hour = hour < 10 ? `0${hour}`: hour
        second = second < 10 ? `0${second}`: second
    
        return `${hour}:${minute}:${second}`
    }

    function dayMaking(){
        let date = new Date()
        let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        return weekDays[date.getDay()]
    }
    
    function dateMaking(){
        let date = new Date()
        let kun = date.getDate()
        let month = date.getMonth()
        let year = date.getFullYear()
        let monthDays = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        kun = kun < 10 ? `0${kun}`: kun

        return `${kun}-${monthDays[date.getMonth()]}. ${year}`
    }

    date.innerHTML = dateMaking()
    day.innerHTML = dayMaking()   
    time.innerHTML = timeClocking()
    
    setInterval(()=>{
        time.innerHTML = timeClocking()
        day.innerHTML = dayMaking()
        date.innerHTML = dateMaking()
    }, 1000)