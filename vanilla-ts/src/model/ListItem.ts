export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  //   Getters
  public get id(): string {
    return this._id;
  }
  public get item(): string {
    return this._item;
  }
  public get checked(): boolean {
    return this._checked;
  }

  //   Setters
  public set id(value: string) {
    this._id = value;
  }
  public set item(value: string) {
    this._item = value;
  }
  public set checked(value: boolean) {
    this._checked = value;
  }
}
