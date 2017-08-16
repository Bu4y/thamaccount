export class AccountListModel {
    accounts: Array<AccountModel>
}

export class AccountFormModel {
    docno: string;
    docdate: Date;
    debits: Array<DebitModel>;
    credits: Array<CreditModel>;
    remark: string;
    totaldebit: number;
    totalcredit: number;
    gltype: string;
    status: string;
}

export class DebitModel {
    account: AccountModel = new AccountModel();
    description: string;
    amount: number;
}

export class CreditModel {
    account: AccountModel = new AccountModel();
    description: string;
    amount: number;
}

export class AccountModel {
    _id: string;
    name: string;
    accountno: string;
    parent: string;
    status: string;
}