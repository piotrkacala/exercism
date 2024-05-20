// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  // throw new Error('Implement the checkHumidity function');
  if (humidityPercentage > 70) {
    throw new Error('err')
  }
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  // throw new Error('Implement the reportOverheating function');
  if (temperature === null) {
    throw new ArgumentError('fjd')
  }
  if (temperature > 500) {
    throw new OverheatingError(temperature)
  }
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
  // throw new Error('Implement the monitorTheMachine function');
  try {
    actions.check()
  } catch(err) {
      console.log(err)
    if (err instanceof ArgumentError) {
      actions.alertDeadSensor()
    } else if (err instanceof OverheatingError && Number(err.message.replace('The temperature is ','').replace(' ! Overheating !','')) > 600) {
      actions.shutdown()
    } else if (err instanceof OverheatingError) {
      actions.alertOverheating()
    }else {
      throw err
    }
  }
}
