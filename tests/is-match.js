
const isMatch = function(s, p) {
    const m = s.length, n = p.length;

    const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(false));
    console.log('6', 'dp', dp);
    dp[0][0] = true;

    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }
    console.log('14', 'dp', dp);
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                console.log(`7: i=${i}, j=${j}, dp[i][j - 2]=${dp[i][j - 2]}`);
                // Cero ocurrencias
                dp[i][j] = dp[i][j - 2];
                // Una o más ocurrencias
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
};

function run() {
    console.log('=== Regular Expression Matching ===');
    const tests = [
        { s: "aa", p: "a", expected: false },
        { s: "aa", p: "a*", expected: true },
        // { s: "ab", p: ".*", expected: true },
        // { s: "aab", p: "c*a*b", expected: true },
        // { s: "mississippi", p: "mis*is*p*.", expected: false }
    ];

    for (const { s, p, expected } of tests) {
        const result = isMatch(s, p);
        console.log(`isMatch("${s}", "${p}") → ${result} (expected: ${expected})`);
    }
}

module.exports = { run };
