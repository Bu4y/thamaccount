export class ExpendListModel {
    expend: Array<ExpendModel>;
}

export class ExpendModel {
    name: string;
    unitprice: number;
    vat: number;
    netamount: number;
}