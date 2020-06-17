import { Category } from 'src/modules/Category/interfaces/category';
import { LocalizeString } from 'src/core/mongo/localize';

export interface PostUpdateModel {
  title?: LocalizeString;
  content?: LocalizeString;
  categories?: any[];
  slug?: string;
}
