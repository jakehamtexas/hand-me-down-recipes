import { IDocumentable } from '../contracts/Entity/IDocumentable';

export const getAsAnemicModel = <T extends IDocumentable>(
  EntityType: new () => T,
  document: object
): T => {
  const mongoKeys = ['__v', '_id'];
  const anemicModel = Object.assign(
    new EntityType(),
    Object.entries(document)
      .filter(entry => !mongoKeys.includes(entry[0]))
      .reduce(
        (obj, entry) => ({
          ...obj,
          [entry[0]]: entry[1]
        }),
        {}
      )
  );
  const idEntry = Object.entries(document).find(entry => entry[0] === '_id');
  anemicModel.id = idEntry ? idEntry[1] : null;
  return anemicModel;
};
