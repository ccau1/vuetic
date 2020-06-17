import { Category } from 'src/modules/Category/interfaces/category';
import { LocalizeString } from 'src/core/mongo/localize';

export interface PostCreateModel {
  title: LocalizeString;
  content: LocalizeString;
  slug: string;
  categories?: string[];
  isArchived?: Boolean;
  createdBy?: string;
}
