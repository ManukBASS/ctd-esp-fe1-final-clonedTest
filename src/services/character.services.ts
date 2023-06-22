import Episode from "../types/episode.types";
import PageInfo from "../types/pageInfo.types";
import Character from "../types/character.types";

/**
 *
 * @param {string | undefined} name
 * @returns {Promise<[Character[], PageInfo, number] | [any, any, number]>} Characters and info
 */
export const getCharactersAPI = async (
  name?: string
): Promise<[Character[], PageInfo, number] | [any, any, number]> => {
  let nameParam = "";
  if (name !== "" && name !== undefined) {
    nameParam = `name=${name}`;
  }
  return fetch(`https://rickandmortyapi.com/api/character?${nameParam}`).then(
    function (response) {
      return response
        .json()
        .then((data) => [data.results, data.info, response.status]);
    }
  );
};

/**
 *
 * @param {string }url
 * @returns {Promise<[Character[], PageInfo]>} Characters and Info
 */
export const changePage = async (
  url: string
): Promise<[Character[], PageInfo]> => {
  return fetch(url)
    .then((data) => data.json())
    .then((data) => [data.results, data.info]);
};

/**
 *
 * @param {Array<number>} arrayEpisodeID
 * @returns {Promise<Episode | Episode[]>} All episodes of one character
 */
export const fetchEpisodes = async (
  arrayEpisodeID: (string | undefined)[]
): Promise<Episode | Episode[]> => {
  return (
    await fetch(`https://rickandmortyapi.com/api/episode/${arrayEpisodeID}`)
  ).json();
};
