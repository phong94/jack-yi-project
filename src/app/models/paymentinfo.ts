export class PaymentInfo {
    constructor(
        public payer: string,
        public item: string,
        public price: number
    ) {}
}