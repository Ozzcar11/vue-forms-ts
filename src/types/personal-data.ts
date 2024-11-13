export type ChildrenType = {
  id?: string;
  name: string;
  age: number | null;
}

export type PersonalDataType = {
  name: string;
  age: number | null;
  childrens: ChildrenType[];
};
