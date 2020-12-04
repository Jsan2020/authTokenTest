//const fs = require("fs")
//const config = require("./config.json")

const contentfulImport = require('contentful-import')

const options = {
  contentFile: './blogPostsMapped.json',
  spaceId: '6zgqw75l3s8l',
  managementToken: 'h5c9s_pvOlekL3yXOzU1-pq0T-9xuJKlEh9gYyE7NUY',
  accessToken: 'h5c9s_pvOlekL3yXOzU1-pq0T-9xuJKlEh9gYyE7NUY',
  environmentId: 'stage'
}

contentfulImport(options)
  .then(() => {
    console.log('Data imported successfully')
  })
  .catch((err) => {
    console.log('Oh no! Some errors occurred!', err)
  })