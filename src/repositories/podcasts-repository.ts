import fs from 'fs';
import path from 'path';

import { PodcastModel } from '../models/podcast-model';

const pahtData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcasts = async (
    podcastName?: string
): Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pahtData, 'utf-8');
    let jsonFile = JSON.parse(rawData);

    if(podcastName) {
        jsonFile = jsonFile.filter((podcast: PodcastModel) => podcast.podcastName === podcastName);
    };
    
    return jsonFile;
}