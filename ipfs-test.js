const ipfs = require('ipfs-api')();

const input = [
  // 질문 글 업로드
  {
    title: 'This is test question title',
    content: 'This is test question?',
    answerUserId: 'user1',
    questionUserAddress: '0xaafAFc3a999D5fAe65d2aA8fAC3CD74a214BcA22',
    timestamp: '1650818580878',
  },
];

// 확인 : https://ipfs.io/ipfs/{해시값}
ipfs.files
  .add(Buffer.from(JSON.stringify(input)))
  .then((res) => {
    const hash = res[0].hash;
    console.log('added data hash:', hash);
    return ipfs.files.cat(hash);
  })
  .then((output) => {
    console.log('retrieved data:', JSON.parse(output));
  });
