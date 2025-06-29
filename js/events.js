import { generateCalender } from './calender.js'


export const changeMonth = () => {
    const buttonRight = document.querySelector('.month-right')
    const buttonLeft = document.querySelector('.month-left')

    let date = new Date();

    buttonRight.addEventListener('click', () => {
        document.querySelector('.grid-container').textContent = '';

        date.setMonth(date.getMonth() + 1);

        generateCalender(date);
    })

    buttonLeft.addEventListener('click', () => {
        document.querySelector('.grid-container').textContent = '';

        date.setMonth(date.getMonth() - 1);


        generateCalender(date);

    })




    
}


