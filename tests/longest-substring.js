function lengthOfLongestSubstring(s) {
    const lastIndexMap = new Map();
    let left = 0;
    let maxLength = 0;
    let longestSubstring = '';

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        if (lastIndexMap.has(currentChar) && lastIndexMap.get(currentChar) >= left) {
            left = lastIndexMap.get(currentChar) + 1;
        }

        lastIndexMap.set(currentChar, right);

        const currentLength = right - left + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
            longestSubstring = s.substring(left, right + 1);
        }
    }
    console.log(`Longest substring with unique chars of ${s}:`, longestSubstring);
    return maxLength;
}

function run() {
  console.log('=== Longest Substring ===');
  console.log(`Length of longest substring in "abcabcbb": ${lengthOfLongestSubstring("abcabcbbhjklmn")}`);
  console.log(`Length of longest substring in "bbbbb": ${lengthOfLongestSubstring("bbbbb")}`);
  console.log(`Length of longest substring in "pwwkew": ${lengthOfLongestSubstring("pwwkew")}`);
}

module.exports = { run };
