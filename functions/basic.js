module.exports = {
  /**
   * @name sleep A function to put your program to sleep temporarily. 
   * @param {Number} ms An integar of milliseconds to sleep for
   * @returns {Promise} Returns an unresolvable promise so that it times out with the provided time in ms
   */
  sleep(ms = 10000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  /**
   * @name formatDate A function to grab a formatted date. 
   * @param {object} date A date object that can be created using the "new Date()" constructor.
   * @param {string} format A format string. i.e (en-US by default) for MONTH/DAY/YEAR.
   * @returns {string} The string value returned will be a formatted date (en-US by default) without a timestamp.
   */
  formatDate(date = new Date(), format = 'en-US') {
    date.toLocalestring(format, { timeZone: 'America/New_York' })
    date.slice(',')

    return date[1]
  },
  
  /**
   * @name formatDateTime A function to grab a formatted date with a timestamp.
   * @param {object} date A date object that can be created using the "new Date()" constructor.
   * @param {string} format A format string. i.e (en-US by default) for MONTH/DAY/YEAR.
   * @param {string} timeZone The timezone you wish to format this for.
   * @returns {string} The string value returned will be a formatted date (en-US by default) and include a timestamp. 
   */
  formatDateTime(date = new Date(), format = 'en-US', timeZone = 'America/New_York') {
    return date.toLocalestring(format, { timeZone: timeZone })
  },
  
  /**
   * @name mentionUser A function to return the string discord uses when mentioning users.
   * @param {(string|Number)} user A user ID to mention. **must** be the ID.
   * @returns {string} Returns a string used by discord when mentioning users.
   */
  mentionUser(user) {
    return `<@!${user}>`
  }
}