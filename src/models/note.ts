export interface INote{
  _id?: string,
  title: string,
  isArchived: boolean,
  tags: string[],
  content: string,
  lastEdited: Date
}