const path = require("path")

module.exports = {
  datasets: {
    dev: [1],
    base: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    small: [0, 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
    large: [0, 1000, 2000, 4000, 8000, 16000, 32000, 64000]
  },
  log: {
    hasura_secret: process.env.HASURA_SECRET,
    hasura_url: process.env.HASURA_URL,
    maxHistory: 10
  },
  tests: [
    {
      name: "docusaurus",
      version: "2.0.0-alpha.73",
      color: "#222",
      paths: {
        build: path.join(__dirname, "ssg/docusaurus/build"),
        content: path.join(__dirname, "ssg/docusaurus/docs/ssg-test"),
        root: path.join(__dirname, "ssg/docusaurus")
      },
      commands: {
        clean: "npm run clear",
        build: "npm run build"
      }
    },
    {
      name: "gatsby",
      version: "3.3.1",
      color: "#542c85",
      framework: true,
      paths: {
        build: path.join(__dirname, "ssg/gatsby/public"),
        content: path.join(__dirname, "ssg/gatsby/src/pages"),
        root: path.join(__dirname, "ssg/gatsby")
      },
      commands: {
        clean: "npm run clean",
        build: "npm run build"
      }
    },
    {
      name: "hugo",
      version: "0.82.1",
      color: "#ff4088",
      paths: {
        build: path.join(__dirname, "ssg/hugo/public"),
        content: path.join(__dirname, "ssg/hugo/content/pages"),
        root: path.join(__dirname, "ssg/hugo")
      },
      commands: {
        clean: "rm -rf public",
        build: "npm run build"
      }
    },
    {
      name: "next",
      version: "10.1.3",
      color: "#0070f3",
      framework: true,
      paths: {
        build: path.join(__dirname, "ssg/next/.next"),
        content: path.join(__dirname, "ssg/next/pages"),
        root: path.join(__dirname, "ssg/next")
      },
      commands: {
        clean: "rm -rf public",
        build: "npm run build"
      }
    }
  ]
}
