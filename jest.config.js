module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!(modulo-especifico)/)'],
  setUpFiles: ['./jest.setup.js'],
};