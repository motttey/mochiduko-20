jest.mock('vuetify', () => ({
  createVuetify: () => ({
    install() {
      // no-op: 実際には何も登録しない
    },
  }),
}))

// これを使うなら、上の stubs でタグだけ用意してあげればOK
jest.mock('vuetify/components', () => ({}))
jest.mock('vuetify/directives', () => ({}))
