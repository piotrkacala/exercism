// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  // throw new Error('Please implement the isValidCommand function');
  return (/^chatbot/i).test(command)
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  // throw new Error('Please implement the removeEmoji function');
  const reg = new RegExp('emoji....','g')
  return message.replace(reg,'')
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  // throw new Error('Please implement the checkPhoneNumber function');
  return (/^\(\+..\)\s...-...-.../).test(number) ? 'Thanks! You can now download me to your phone.' : "Oops, it seems like I can't reach out to " + number
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  // throw new Error('Please implement the userInput function');
  return userInput.match(/\w+\.\w+/g)
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  // throw new Error('Please implement the fullName function');
  const split = fullName.split(', ')
  console.log(split)
  return fullName.replace(/,\s\w+/, (mat => {
    // console.log(mat)
    return 'Nice to meet you' + mat + ' ' + split[0]
  })).replace(split[0], '')
}
