
/**
 * 
 * @param {string} date in YYYY-MM-DDTHH:MM:SSZ format
 * @returns formatted date in YYYY.MM.DD format
 */
const formatDate = (date: string) :string => {
    const trimmedNewDate = date.slice(0,10);
    const transformDashToDots = trimmedNewDate.replace(/-/g, '.');

    return transformDashToDots;
}

export default formatDate;