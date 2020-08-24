export class IconForm {
  constructor(
    public source: string,
    public name: string,
    public size: number,
    public hasViewBox: boolean,
    public viewboxX1?: number,
    public viewboxY1?: number,
    public viewboxX2?: number,
    public viewboxY2?: number,
    public color?: string,
    public classes?: string
  ) {  }
}
