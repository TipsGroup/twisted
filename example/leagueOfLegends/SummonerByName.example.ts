import { RiotApi } from '../../src'
import { config } from '../config/config'

const api = new RiotApi()

export async function summonerByNameExample () {
  return await api.leagueOfLegends.summoner.getByName(config.summonerName, config.region)
}