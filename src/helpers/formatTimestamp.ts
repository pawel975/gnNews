/**
 * 
 * @param {number} timestamp of time
 * @returns {string} formatted time in "hh:mm:ss" format
 * 
 */
export const formatTimestamp = (timestamp: number) => {

    const date = new Date(timestamp)
    // Adds "0" prefix to each time part in case if any of them would be single digit. If it's double digit, "0" would be trimmed.
    const seconds = "0" + date.getSeconds()
    const hours = "0" + date.getHours()
    const minutes = "0" + date.getMinutes()
    const formattedTime = hours.slice(-2) + ':' + minutes.slice(-2) + ':' + seconds.slice(-2)

    return formattedTime
}