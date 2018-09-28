$(document).ready(() => {
    $.getJSON('http://94.46.140.3:8080/teknikum_menu', (data) => {
        data.meals.forEach(day => {
            var $food = new DailyMenu(day)
            $(document.body).append($food.boilerPlate)
      
            })
        });
    })




class DailyMenu {
    constructor(weekday){
        this.today = days[d.getDay()]
        var isToday = (this.today == weekday.day)
        this.boilerPlate = `<h5>
        <div class="${isToday ? 'vdag' : 'ndag'}">
            <div>Dag: ${weekday.day}</div> <br/>
            <div>Mat: ${weekday.alt_dish}</div>
            <div>Vegetarisk alternativ: ${weekday.dish}</div> <br/>
            
        </div>
        </h5>`
    }
}




var d = new Date()
var days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"]
