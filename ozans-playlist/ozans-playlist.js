// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  // throw new Error('Please implement the removeDuplicates function');
  const deduped = new Set(playlist)
  return Array.from(deduped)
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  // throw new Error('Please implement the hasTrack function');
  const list = new Set(playlist)
  const hasTrack = list.has(track)
  return hasTrack
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  // throw new Error('Please implement the addTrack function');
  const list = new Set(playlist)
  list.add(track)
  return Array.from(list)
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  // throw new Error('Please implement the deleteTrack function');
  const list = new Set(playlist)
  list.delete(track)
  return Array.from(list)
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  // throw new Error('Please implement the listArtists function');
  const artists = new Set(playlist.map(item => item.split(' - ')[1]))

  return Array.from(artists)
}
