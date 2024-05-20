#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require('fs');
const path = require('path');

/**
 * Reads the given file and returns lines.
 *
 * This function works regardless of POSIX (LF) or windows (CRLF) encoding.
 *
 * @param {string} file path to file
 * @returns {string[]} the lines
 */
function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const VALID_OPTIONS = [
  '-n', // add line numbers
  '-l', // print file names where pattern is found
  '-i', // ignore case
  '-v', // reverse files results
  '-x', // match entire line
];

const ARGS = process.argv.slice(2);
const flags = []
const filePaths = []
let pattern = ''

ARGS.forEach(item => {
  if (VALID_OPTIONS.includes(item)) {
    flags.push(item)
    return
  }
  if (item.endsWith('.txt')) {
    filePaths.push(item)
    return
  }
  pattern = item
})

const isMultipleFiles = filePaths.length > 1
const printLineNumber = flags.includes('-n')
const caseIns = flags.includes('-i')
const printFile = flags.includes('-l')
const matchLine = flags.includes('-x')
const invert = flags.includes('-v')

if (matchLine) {
  pattern = '^' + pattern + '$'
}
const reg = new RegExp(pattern, caseIns ? 'i' : undefined)

filePaths.forEach(filePath => {
  const content = readLines(filePath)

  for (let i = 0; i < content.length; i++) {
    let item = content[i]
    let isMatch = true

    if (!reg.test(item)) {
      isMatch = false
    }

    if (invert) {
      isMatch = !isMatch
    }

    if (!isMatch) {
      continue
    }

    if (printFile) {
      console.log(filePath)
      break
    }

    const fileName = isMultipleFiles ? filePath + ':' : ''
    const lineNo = printLineNumber ? `${i + 1}:` : ''
    const output = fileName + lineNo + item

    console.log(output)
  }

})