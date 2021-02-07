module.exports = {
      sleep(ms) {
          return new Promise(resolve => setTimeout(resolve, ms));
      },

      formatDate(date) {
          return new Intl.DateTimeFormat('en-US').format(date);
      }
}