import {person} from './documents/person'
import {page} from './documents/page'
import post from './documents/post'
import cocktailsPage from './documents/cocktailsPage'
import stockistsPage from './documents/stockistsPage'
import cocktail from './objects/cocktail'
import stockist from './objects/stockist'
import ingredient from './objects/ingredient'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  cocktailsPage,
  stockistsPage,
  // Objects
  cocktail,
  stockist,
  ingredient,
  blockContent,
  infoSection,
  callToAction,
  link,
]
