import { type SchemaTypeDefinition } from 'sanity'
import heroSection from './heroSection'
import homePage from './homePage'
import aboutPage from './aboutPage'
import contactPage from './contactPage'
import contactInformation from './contactInformation'
import service from './service'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection, homePage, aboutPage, contactPage, contactInformation, service, product],
}
