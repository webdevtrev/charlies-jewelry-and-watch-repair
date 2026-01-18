import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton Home Page
      S.listItem()
        .title('Home Page')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            // Use a fixed document ID so Studio can't create duplicates
            .documentId('homePage')
        ),
      // Singleton About Page
      S.listItem()
        .title('About Page')
        .id('aboutPage')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
      // Singleton Contact Page
      S.listItem()
        .title('Contact Page')
        .id('contactPage')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
      // Singleton Contact Information (site-wide data)
      S.listItem()
        .title('Contact Information')
        .id('contactInformation')
        .child(
          S.document()
            .schemaType('contactInformation')
            .documentId('contactInformation')
        ),
      S.divider(),
      // Other document types (exclude the singletons so they don't appear twice)
      ...S.documentTypeListItems().filter((listItem) => {
        const id = listItem.getId()
        return (
          id !== 'homePage' && id !== 'aboutPage' && id !== 'contactPage' && id !== 'contactInformation'
        )
      }),
    ])
