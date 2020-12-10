export const state = () => ({
  testState: 'testStateText'
})

export const getters = {
  getTheTestState: (state) => {
    return state.testState
  }
}

