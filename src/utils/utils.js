
export const getShortDayFromTimestamp=(timestamp)=> {
    // Create a new Date object using the timestamp
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

    // Array of short day names (first three letters)
    const shortDaysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get the day index (0-6)
    const dayIndex = date.getUTCDay();

    // Return the corresponding short day name
    return shortDaysOfWeek[dayIndex];
}

export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

