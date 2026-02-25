let order = ["đơn hàng A", "đơn hàng B", "đơn hàng C", "đơn hàng D", "đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];

const newRever = revenues.some((p) => p<0);
console.log(`có đơn hàng âm : ${newRever}`);
const newOrder = order.every((o) => o>500);
console.log(`tất cả trên 500 : ${newOrder}`);

const netProfits = revenues.map((net) => net*0.9);
console.log(`lợi nhuận ròng : [${netProfits}]`);

