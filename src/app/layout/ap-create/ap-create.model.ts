export class itemModel {
    name: string;
    qty: number;
    unitprice: number;
    vat: number;
    netamount: number;
}

export class APModel {
    docno: string;
    docdate: Date;
    contact: ContactModel;
    items: Array<itemModel>;
    amount: number;
    totalamount: number;
    discount: number;
    netamount: number;
}

export class ContactModel {
    name: string;
    govermentId: string;
    email: string;
    tel: string;
    address: AddressModel
}

export class AddressModel {
    address: string;
    postcode: string;
    subdistrict: string;
    province: string;
    district: string;
}