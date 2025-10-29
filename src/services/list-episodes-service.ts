import { repositoryPodcasts } from "../repositories/podcasts-repository";

export const seviceListEpisodes = async () => {
    const data = await repositoryPodcasts();
    return data;
}