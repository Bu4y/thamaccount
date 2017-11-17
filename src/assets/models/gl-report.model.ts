export class GlReportModel {
    type: string;
    startdate: Date;
    enddate: Date;
    daily: GlDailyReportModel = new GlDailyReportModel();
    acceach: {};
    gain: {};
    balance: {};
}
//  Gl-Daily
export class GlDailyReportModel {
    date: Date;
    company: string;
    startdate: Date;
    enddate: Date;
    title: string;
    transaction: Array<GlDailyTransactionModel> = [];
}


export class GlDailyTransactionModel {
    docdate: Date;
    docno: string;
    list: Array<GlDailyTransactionListModel> = [];
    remark: string;
}

export class GlDailyTransactionListModel {
    accountname: string;
    accountno: string;
    description: string;
    document: string;
    timestamp: string;
    debit: number;
    credit: number;
}
//  Gl-Daily