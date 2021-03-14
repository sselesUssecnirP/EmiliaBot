const func = {
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
    let string = date.toLocaleString(format, { timeZone: 'America/New_York' })
    string.split(',')

    return string[1]
  },
  
  /**
   * @name formatDateTime A function to grab a formatted date with a timestamp.
   * @param {object} date A date object that can be created using the "new Date()" constructor.
   * @param {string} format A format string. i.e (en-US by default) for MONTH/DAY/YEAR.
   * @param {string} timeZone The timezone you wish to format this for.
   * @returns {string} The string value returned will be a formatted date (en-US by default) and include a timestamp. 
   */
  formatDateTime(date = new Date(), format = 'en-US', timeZone = 'America/New_York') {
    return date.toLocaleString(format, { timeZone: timeZone })
  },
  
  /**
   * @name mentionUser A function to return the string discord uses when mentioning users.
   * @param {(string|Number)} user A user ID to mention. **must** be the ID.
   * @returns {string} Returns a string used by discord when mentioning users.
   */
  mentionUser(user) {
    return `<@!${user}>`
  },
  /**
   * @name mentionChannel A function to return the string discord uses when mentioning channels.
   * @param {(string|Number)} channel A channel ID to mention. **must** be the ID.
   * @returns Returns a string used by discord when mentioning channels.
   */
  mentionChannel(channel) {
    return `<#${channel}>`
  },
  /**
   * @name mentionRole A function to return the string discord uses when mentioning roles.
   * @param {(string|Number)} role A role ID to mention. **must** be the ID.
   * @returns Returns a string used by discord when mentioning roles.
   */
  mentionRole(role) {
    return `<@&${role}>`
  },
  /**
   * @name grabms A function to return a number that can be used for functions/methods that require an argument in milliseconds.
   * @param {string} arg Must be a string of a number plus either 'd', 's', 'm', 'ms' at the end for day, second, minute, and millisecond respectively.
   * @returns {number} Returns a number in milliseconds.
   */
  grabms(arg) {
    if (arg.includes('d')) {
      arg.slice('d')
      Number.parseInt(arg)
      arg = (arg * 86400) * 1000
  } else if (arg.includes('s')) {
      arg.slice('s')
      Number.parseInt(arg)
      arg = (arg * 1000)
  } else if (arg.includes('m')) {
      arg.slice('m')
      Number.parseInt(arg)
      arg = (arg * 60) * 1000
  } else {
      if (arg.includes('ms')) {
        arg.slice('ms')
        Number.parseInt(arg)  
        return arg;
      }

      throw 'ERROR: USER DID NOT PROVIDE A VALID ARGUMENT. PLEASE ADD "D", "S", "M", OR "MS" TO THE END ARGUMENTS.'
  }

  return arg;
  }
}

module.exports = func