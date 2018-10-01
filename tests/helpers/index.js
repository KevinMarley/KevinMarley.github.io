const mockAction = () => {
  return {
    called: 0,
    getCalled () {
      return this.called
    },
    action () {
      this.called++
    }
  }
}

module.exports = {
  mockAction
}
