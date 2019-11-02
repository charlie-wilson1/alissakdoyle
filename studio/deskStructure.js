import S from "@sanity/desk-tool/structure-builder";

// filters the 'settings' document from the method that spreads out/returns all the other doc types
const hiddenDocTypes = listItem => ![
  'settings'
].includes(listItem.getId());

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.editor()
            .id('settings')
            .schemaType('settings')
            .documentId('global-settings')
        ),
        ...S.documentTypeListItems()
          .filter(hiddenDocTypes)
    ]);