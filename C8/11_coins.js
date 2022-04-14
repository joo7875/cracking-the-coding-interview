// function coins(coins, amount) {
//     if (amount === 0) return 0;

//     let dp = new Array(amount + 1).fill(Infinity);
//     dp[0] = 0;

//     for (let coin of coins) {
//         for (let i = coin; i <= amount; i++) 
//             dp[i] = Math.min(dp[i], dp[i - coin] + 1);
//         console.log(dp)
//     }

//     return dp[amount] === Infinity ? -1 : dp[amount];
// }

let dp = {};

function coins(arr, total, cur = 1) {

    if (total < 0) return 0;

    let key = `${total}:${cur}`;

    if (!dp[key]) {
        if (total === 0) dp[key] = 1;
        else {
            let ways = 0;

            for (let coin of arr)
                if (cur <= coin) ways += coins(arr, total - coin, coin);

            dp[key] = ways;
        }
    }

    return dp[key];
}

const arr = [1, 5, 10, 25];
// console.log(coins(arr, 5)); // 2
console.log(coins(arr, 17)); // 6

