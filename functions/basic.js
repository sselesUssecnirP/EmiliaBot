module.exports = {
  sleep(ms = 10000) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  formatDate(date = new Date()) {
    date.toLocaleString('en-US', { timeZone: 'America/New_York' })

    return date[1]
  },
  formatDateTime(date = new Date()) {
    return date.toLocaleString('en-US', { timeZone: 'America/New_York' })
  },
  mentionUser(user) {
    return `<@!${user}>`
  }
}