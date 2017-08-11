export class AccountModel {
    _id: string;
    name: string;
    accountno: string;
    parent: string;
    status: string;
}

export class AccountListModel {
    accounts: Array<AccountModel>
}