/**
 * 
 * @returns {string} random ID
 */
const getRandomUUID = ():string => (crypto.randomUUID());

export default getRandomUUID;