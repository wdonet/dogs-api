## API Challenge

This is an api for consuming Dog data from https://dog.ceo/dog-api/

### Getting Started

#### Requirements for installation

- NPM
- Node

#### Run on local

1. `npm i` Do install it
2. `npm start` to start API server, should see the below message
```bash
Listening on port 3000 ...
Press CTL+C to quit.
```

#### Try endpoints

**Ping** `curl http://localhost:3000/ping`
  ```json
  {"status":"Hello World!"}
  ```

**Random dogs** `curl http://localhost:3000/dogs/`
  ```json
  [
    {
        "breed":"bluetick",
        "id":"3640",
        "code":"n02088632",
        "url":"https://images.dog.ceo/breeds/bluetick/n02088632_3640.jpg"
    },
    {
        "breed":"cairn",
        "id":"3650",
        "code":"n02096177",
        "url":"https://images.dog.ceo/breeds/cairn/n02096177_3650.jpg"
    },
    {
        "breed":"ovcharka",
        "subBreed":"caucasian",
        "id":"155610",
        "code":"IMG_20191130",
        "url":"https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20191130_155610.jpg"
    }
  ]
  ```

**One random dog by breed** `curl http://localhost:3000/dogs/{breed}` - try breeds: `hound`, `husky` or `mexicanhairless`
  ```json
  {
    "breed":"hound",
    "subBreed":"ibizan",
    "id":"822",
    "code":"n02091244",
    "url":"https://images.dog.ceo/breeds/hound-ibizan/n02091244_822.jpg"
  }
  ```
