import { generateCalender } from "./calender.js";
import { changeMonth } from "./events.js"




document.addEventListener('DOMContentLoaded', () => {
    generateCalender(new Date())
    changeMonth();


    
})