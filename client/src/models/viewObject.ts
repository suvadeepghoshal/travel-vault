export class ViewObject {
  private _id!: string;
  private _title!: string;
  private _description!: string;
  private _href!: string;
  private _imgSrc!: string;

  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }
  public get imgSrc(): string {
    return this._imgSrc;
  }
  public set imgSrc(value: string) {
    this._imgSrc = value;
  }
  public get href(): string {
    return this._href;
  }
  public set href(value: string) {
    this._href = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  constructor() {}
}
