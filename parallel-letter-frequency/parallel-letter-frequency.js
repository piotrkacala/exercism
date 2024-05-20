const { Worker, isMainThread, workerData, parentPort } = require('worker_threads')

if (isMainThread) {
  module.exports.parallelLetterFrequency = async (texts) => {
    const promises = texts.map(text => runService(text.toLowerCase().replaceAll(/[^\p{L}]/gu, '')))
    const results = await Promise.all(promises)
    return results.reduce((res, resOne) => {
      for (let prop in resOne) {
        if (res[prop] === undefined) {
          res[prop] = 0
        }
        res[prop] += resOne[prop]
      }
      return res
    }, {})
  }
} else {
  const fromOne = (txt) => [...txt].reduce((acc, cur) => {
    if (acc[cur] === undefined) {
      acc[cur] = 0
    }
    acc[cur] += 1
    return acc
  }, {})
  parentPort.postMessage(fromOne(workerData))
}

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(__filename, { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}
