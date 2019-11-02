import S from "@sanity/desk-tool/structure-builder";

// filters the 'settings' document from the method that spreads out/returns all the other doc types
const hiddenDocTypes = listItem => ![
  'settings',
  'biography',
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
        )
        .showIcon(false),
      S.listItem()
        .title("Biography")
        .child(
          S.editor()
          .id('bioography')
          .schemaType('biography')
          .documentId('biography-text')
        )
        .showIcon(false),
      S.listItem()
        .title("Resume")
        .child(
          S.editor()
            .id('resume')
            .schemaType('resume')
            .documentId('resume-file')
        )
        .showIcon(false),
      S.divider(),
      ...S.documentTypeListItems()
          .filter(hiddenDocTypes)
    ]);