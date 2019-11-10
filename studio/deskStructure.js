import S from "@sanity/desk-tool/structure-builder";
import { MdPhoto, MdSettings, MdPerson, MdDescription } from "react-icons/md";


// filters the 'settings' document from the method that spreads out/returns all the other doc types
const hiddenDocTypes = listItem => ![
  'settings',
  'biography',
  'gallery',
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
        .icon(MdSettings),
      S.listItem()
        .title("Biography")
        .child(
          S.editor()
          .title('Biography Page Content')
          .id('bioography')
          .schemaType('biography')
          .documentId('biography-text')
        )
        .icon(MdPerson),
      S.listItem()
        .title("Gallery")
        .child(
          S.editor()
          .title('Gallery Images')
          .id('gallery')
          .schemaType('gallery')
          .documentId('gallery-desk')
        )
        .icon(MdPhoto),
      S.listItem()
        .title("Resume")
        .child(
          S.editor()
            .title('Resume Attachment')
            .id('resume')
            .schemaType('resume')
            .documentId('resume-file')
        )
        .icon(MdDescription),
      S.divider(),
      ...S.documentTypeListItems()
          .filter(hiddenDocTypes)
    ]);