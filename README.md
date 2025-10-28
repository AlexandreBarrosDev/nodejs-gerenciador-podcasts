# Gerenciador de podcasts

### Descrição
Um app no estilo Netflix, que gerencia diferentes episódios de podcasts por 
categoria

### Domínio
Podcasts feitos em vídeo

### Funcionalidades
- Listar os episódios de podcasts em sessões de categorias.
  - programação;
  - carreiras;
  - tecnologias;
  - IA.
- Filtrar episódios por nome de podcast.

## Como?

### Funcionalidade:
Listar os episódios de podcasts em sessões de categorias
#### Implementação =>
retornar em uma api rest (json):
- nome do podcast;
- nome do episódio;
- imagem de capa;
- link do episódio.

```js
    [  
        {
            podcastName: "Hipsters #10",
            episode: "BLOCKCHAIN além do hype: smart contracts e fidelidade | Fabiano Miranda - Soul Up #10",
            cover: "https://i.ytimg.com/vi/29nYxK_3uTM/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&amp;rs=AOn4CLCGtkJbWApARpnNGyK6GKIJtylpbg",
            link: "https://www.youtube.com/watch?v=29nYxK_3uTM",
            categories: ["programação", "tecnologias"]
        },
        {
            podcastName: "Hipsters #09",
            episode: "Nunca mais vamos escrever como antes: LLMs e criatividade | Felipe Iszlaji - Clarice.AI #09",
            cover: "https://i.ytimg.com/vi/2PIdvwVib0c/maxresdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCJ9u5O8fienQZbMJAzR1LMqIiKnA",
            link: "https://www.youtube.com/watch?v=2PIdvwVib0c",
            categories: ["IA", "tecnologias"]
        }
    ]  
```


