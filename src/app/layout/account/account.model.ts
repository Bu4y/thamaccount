export class AccountListModel {
    accounts: Array<AccountModel>
}

export class AccountModel {
    name: string;
    accountno: string;
    parent: string;
    status: string;
}