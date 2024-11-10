// Function to add event to local storage
function addEventToLocalStorage(eventName,eventDate,startTime,endTime,description,location){
    
    const event={
        eventName,
        eventDate,
        startTime,
        endTime,
        description,
        location
    }
    localStorage.setItem("event", JSON.stringify(event))
}

function handleSubmit(){
    event.preventDefault()
    
    const eventName=document.getElementById("event-name").value
    const eventDate=document.getElementById("event-date").value
    const startTime=document.getElementById("start-time").value
    const endTime=document.getElementById("end-time").value
    const description=document.getElementById("description").value
    const location=document.getElementById("location").value
    if(!eventName||!eventDate||!startTime||!endTime||!description||!location){
        showError()
        return
    }
    addEventToLocalStorage(eventName,eventDate,startTime,endTime,description,location)

    document.getElementById("event-form").reset()
    window.location.href = "inviteCard.html";
}
// Function to show the modal
function showError(){
    document.getElementById("error-modal").style.display = "flex";
    document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeError(){
    document.getElementById("error-modal").style.display = "none"; 
    document.body.style.overflow = "auto";
}

// inviteCard.js

window.onload = function() {
    const eventData = JSON.parse(localStorage.getItem('event'));
    console.log("eventDAta",eventData)
    if (eventData) {
        document.getElementById('event-name-display').innerText = eventData.eventName.toUpperCase();
        document.getElementById('event-date-display').innerText = eventData.eventDate;
        document.getElementById('event-time-display').innerText = `${eventData.startTime} - ${eventData.endTime}`;
        document.getElementById('event-location-display').innerText = `Location: ${eventData.location}`;
        document.getElementById('event-description-display').innerText = eventData.description;
    } else {
        document.getElementById('event-name-display').innerText = "No event details found.";
    }
};




document.getElementById("event-form").addEventListener("submit", handleSubmit)
document.getElementById("close-modal").addEventListener("click",closeError)