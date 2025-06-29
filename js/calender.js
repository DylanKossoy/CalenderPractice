import { getDaysOfMonth } from './util.js'
import { showModal } from './ui.js'



export const generateCalender = (date) => {
    
    const days = getDaysOfMonth(date);

    let today = new Date().getDate();


    
    
    for(let i = 1; i <= days; i++ ) {

        
        
        let cell = document.createElement('div');
        cell.className = 'calender-cell'
        cell.tabIndex = 0;
        cell.id = 'cell' + i;
        cell.addEventListener('click', () => {
            console.log(cell.id)
        })
        
        
        if(i === today) {
            cell.classList.add('today');

        }
    
        let cellNumber = document.createElement('span');
        cellNumber.className = 'calender-cell-number'
        cellNumber.textContent = i;
    
    
        cell.append(cellNumber);
    
        let container = document.querySelector('.grid-container');
        container.append(cell);
        
    }


    let month = date.toLocaleString('default', { month: 'long'});

    document.querySelector('.calender-date-month').textContent = month


}


