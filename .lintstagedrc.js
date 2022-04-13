const path = require('path')

const getRelativeFilePaths = (filePaths) => {
  const relativeFilePaths = filePaths.map((filePath) =>
    path.relative(process.cwd(), filePath),
  )
  return relativeFilePaths
}

const getEsLintCommand = (filePaths) => {
  const paths = getRelativeFilePaths(filePaths)
  const command = paths.length
    ? `tsdx lint --no-ignore --max-warnings=0 --file ${paths.join(' --file ')}` // without '--fix' flag
    : ''
  return command
  /*
    If 'command' is empty string, then in console can be error message,
    but this task will be passed
  */
}

const getPrettierCommand = (filePaths) => {
  const paths = getRelativeFilePaths(filePaths)
  const command = paths.length
    ? `prettier --ignore-unknown --write ${paths.join(' ')}`
    : ''
  return command
  /*
    If 'command' is empty string, then in console can be error message,
    but this task will be passed
  */
}

module.exports = {
  '*.{js,jsx,ts,tsx}': getEsLintCommand,
  '*': getPrettierCommand, // ignoring all unknown formats by the flag '--ignore-unknown'
}
