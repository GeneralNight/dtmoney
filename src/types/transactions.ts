export type Transaction = {
    id: number;
    title: string;
    value: number;
    type: DepositType;
    category: string;
    createdAt: string;
}

export enum DepositType {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}