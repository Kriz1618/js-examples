function areAnagramsSort(str1, str2) {
  const normalize = s => s.toLowerCase().replace(/\s/g, '').split('').sort().join('');
  return normalize(str1) === normalize(str2);
}

function areAnagramsMap(str1, str2) {
  const normalize = s => s.toLowerCase().replace(/\s/g, '');
  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) return false;

  const count = {};
  for (const ch of s1) count[ch] = (count[ch] || 0) + 1;
  for (const ch of s2) {
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}

function run() {
  console.log('=== Anagram ===');
  console.log(`"listen" vs "silent" (sort): ${areAnagramsSort('listen', 'silent')}`);
  console.log(`"hello" vs "world" (sort): ${areAnagramsSort('hello', 'world')}`);
  console.log(`"listen" vs "silent" (map): ${areAnagramsMap('listen', 'silent')}`);
  console.log(`"hello" vs "world" (map): ${areAnagramsMap('hello', 'world')}`);
}

module.exports = { run };