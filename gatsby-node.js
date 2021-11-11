// gatsby-node.js
const { useGatsbyNode } = require('gatsby-plugin-ts-config');
module.exports = useGatsbyNode(() => require('./src/config/gatsby/gatsby-node'));
