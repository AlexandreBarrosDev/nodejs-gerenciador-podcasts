import http, { get } from 'http';

import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse) => {
        const [baseURL, queryString] = req.url?.split('?') ?? ['', ''];

        console.log(baseURL);
        console.log(queryString);

        if (req.method === 'GET' && baseURL === '/api/list') {
            await getListEpisodes(req, res);
        };
        if (req.method === 'GET' && baseURL === '/api/episode') {
            await getFilterEpisodes(req, res);
        };
    }
);

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})