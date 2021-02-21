module.exports = {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    formatDate(date) {
      date.toLocaleString('en-US', { timeZone: 'America/New_York' })

      return date[1]
    },
    formatDateTime(date) {
      return date.toLocaleString('en-US', { timeZone: 'America/New_York' })
    },
    mentionUser(user) {
      return `<@!${user}>`
    }
}