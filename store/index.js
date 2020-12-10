export const state = () => ({
  indexTestText: 'index test text'
})

export const getters = {
  getTextFromIndex: (state) => {
    return state.indexTestText
  }
}
