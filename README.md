# The Prisoner API

![banner](https://github.com/answebdev/the-prisoner-api/assets/36783010/b853041d-40db-4c9b-9c6c-a43863b53040)

## Documentation

Welcome to The Prisoner API. This documentation should provide you with all the information you need to start making your HTTP requests. This API is free. Feel free to use it in your projects.

### Base Url

`https://theprisonerapi.vercel.app/`

&nbsp;
### Episode Attributes

| Attribute | Type | Description |
| :---         |     :---      |          :--- |
| id   | integer     | Unique id per episode    |
| title     | string       | Episode title      |
| episode     | string       | Episode number      |
| directed_by   | string     | Episode director    |
| written_by     | array       | Episode writer(s)      |
| air_year   | string     | Original year episode aired    |
| air_date     | string       | Original air date      |
| wikipedia_storyline   | string     | Brief overview of episode from Wikipedia    |
| imdb_storyline   | string     | Brief overview of episode from IMDb    |
| cast     | string       | Episode actor      |
| guest_appearances     | array       | Episode guest actor(s)      |
| title_img   | string     | Title image from episode    |
| img   | string     | Image from episode    |
| wikipedia     | string       | Link to episode Wikipedia page      |
| imdb   | string     | Link to episode IMDb page    |
| trivia   | string     | Trivia from episode    |

&nbsp;
### Get all episodes

Endpoint to retrieve information from all episodes.

`/episodes`

&nbsp;
The request for all of the episodes looks like this.

```
fetch('https://the-prisoner-api.vercel.app/episodes')
  .then(response => response.json())
  .then(json => console.log(json))
```

&nbsp;
### Get a single episode

Example request by episode id. In this example, episode with an id of 1 is being requested.

```
fetch('https://the-prisoner-api.vercel.app/episodes/1')
  .then(response => response.json())
  .then(json => console.log(json))
```


Running this script will return the following data.

```json
{
    "id": 1,
    "title": "Arrival",
    "episode": "1",
    "directed_by": "Don Chaffey",
    "written_by": [
      "George Markstein",
      "David Tomblin"
    ],
    "air_year": "1967",
    "air_date": "09-29-1967",
    "wikipedia_storyline": "After waking up in the Village and discovering his captivity there, Number Six encounters a friend from the outside who may have a possible escape.",
    "imdb_storyline": "After resigning, a secret agent finds himself trapped in a bizarre prison known only as The Village.",
    "cast": "Patrick McGoohan",
    "guest_appearances": [
      "Guy Doleman",
      "George Baker",
      "Virginia Maskell",
      "Paul Eddington"
    ],
    "title_img": "https://i.postimg.cc/6544t2SP/01-arrival-title.png",
    "img": "https://i.postimg.cc/9050f1sN/01-arrival.png",
    "wikipedia": "https://en.wikipedia.org/wiki/Arrival_(The_Prisoner)",
    "imdb": "https://www.imdb.com/title/tt0679174/",
    "trivia": "No 6 gives his birthdate and time as 4.31 am, 19th March, 1928 - which is exactly the same as Patrick McGoohan's."
}
```

&nbsp;
## Resources

The Prisoner API comes with one common resource:

| Resource  | Description |
| ------------- | ------------- |
| /episodes  | 17 episodes  |
