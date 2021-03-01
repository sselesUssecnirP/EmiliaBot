module.exports = {
  /**
   * @name sleep A function to put your program to sleep temporarily. 
   * @public
   * @param {Integar} ms An integar of milliseconds to sleep for
   * @returns {Promise} Returns an unresolvable promise so that it times out with the provided time in ms
   */
  sleep(ms = 10000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  /**
   * @name formatDate A function to grab a formatted date. 
   * @public
   * @param {Object} date A date object that can be created using the "new Date()" constructor.
   * @param {String} format A format string. i.e (en-US) for MONTH/DAY/YEAR.
   * @returns {String} The string value returned will be a formatted date (en-US) without a timestamp.
   */
  formatDate(date = new Date(), format = 'en-US') {
    date.toLocaleString(format, { timeZone: 'America/New_York' })

    return date[1]
  },
  
  /**
   * @name formatDateTime A function to grab a formatted date with a timestamp.
   * @public
   * @param {Object} date A date object that can be created using the "new Date()" constructor.
   * @param {String} format A format string. i.e (en-US) for MONTH/DAY/YEAR.
   * @param {String} timeZone The timezone you wish to format this for.
   * @returns {String} The string value returned will be a formatted date (en-US) and include a timestamp. 
   */
  formatDateTime(date = new Date(), format = 'en-US', timeZone = 'America/New_York') {
    return date.toLocaleString(format, { timeZone: timeZone })
  },
  
  /**
   * @name mentionUser A function to return the string discord uses when mentioning users.
   * @private
   * @param {(String|Integar)} user A user ID to mention. **must** be the ID.
   * @returns {String} Returns a string used by discord when mentioning users.
   */
  mentionUser(user) {
    return `<@!${user}>`
  }
}