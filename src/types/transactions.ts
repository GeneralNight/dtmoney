export type Transaction = {
    id: number;
    title: string;
    value: number;
    type: DepositType;
    category: string;
    createdAt: string;
}

export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export enum DepositType {
    DEPOSIT = 'deposit',
    WITHDRAW = 'withdraw'
}