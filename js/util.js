

export const getDaysOfMonth = (date) => {
   

    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    return days;

}