#HiAnime REST API

**HiAnime REST API** is an unofficial anime data REST service that extracts information from **hianimez.to**.
It exposes multiple endpoints for discovering anime, fetching detailed info, episodes, available servers, and stream URLs.

> **Notice**
>
> - This project is **not official** and has no association with hianimez.to  
> - There is **no public hosted API** — you must deploy it yourself  
> - All anime content and media rights belong to their respective owners  
> - Intended strictly for **learning and personal projects**

---

##Highlights

- Home sections (spotlight, trending, top airing, latest updates, etc.)
- Anime listing endpoints with filters and categories
- Complete anime metadata
- Episode lists per anime
- Streaming servers and HLS stream URLs
- Search with auto-suggestions

---

##Setup Guide

### Requirements

- **Bun runtime** (mandatory)

Install Bun from: https://bun.sh/docs/installation

---

### Run Locally

```bash
git clone https://github.com/msrofficial/HiAnime-RestApi.git
cd HiAnime-RestApi
bun install
bun run dev
```

The development server will start at:

```
http://localhost:3030
```

Interactive API documentation is available at:

```
http://localhost:3030/doc
```

> **Important Notes**
>
> - This project cannot be started directly with `node` or `nodemon`
> - You must build it using **tsup** with **ESM output** before running under Node.js

---

##Deploy to Render

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/msrofficial/HiAnime-RestApi)

---

##API Reference

Base path:

```
/api/v1
```

Standard response format:

```json
{
  "success": true,
  "data": {}
}
```

---

##Home Data

```http
GET /home
```

Returns spotlight anime, trending titles, top airing shows, latest episodes, genres, and more.

---

##Spotlight

```http
GET /spotlight
```

Provides spotlight anime data.

---

##Top Ten

```http
GET /topten
```

Returns the current top ten anime list.

---

##Anime Listings

```http
GET /{query}?page={page}
```

Available queries:

- top-airing
- most-popular
- most-favorite
- completed
- recently-added
- recently-updated
- top-upcoming
- subbed-anime
- dubbed-anime
- movie
- tv
- ova
- ona
- special

---

##A–Z Listing

```http
GET /az-list/{letter}?page={page}
```

Supported values:

- A–Z
- 0–9
- All

---

##Genre-Based Listing

```http
GET /genre/{genre}?page={page}
```

Supported genres include:

action, adventure, cars, comedy, dementia, demons, drama, ecchi, fantasy, game, harem,
historical, horror, isekai, josei, kids, magic, martial arts, mecha, military, music,
mystery, parody, police, psychological, romance, samurai, school, sci-fi, seinen,
shoujo, shoujo-ai, shounen, shounen-ai, slice-of-life, space, sports, super-power,
supernatural, thriller, vampire

---

##Anime Information

```http
GET /anime/{animeId}
```

Returns detailed anime info including episodes, recommendations, and related titles.

---

##Search

```http
GET /search?keyword={query}&page={page}
```

###Search Suggestions

```http
GET /search/suggestion?keyword={query}
```

---

##Episodes & Streaming

```http
GET /episodes/{animeId}
```

### Episode Servers

```http
GET /servers?id={episodeId}
```

### Stream Data

```http
GET /stream?id={episodeId}&server={server}&type={sub|dub}
```

Includes HLS stream URLs, subtitle tracks, and intro/outro timestamps.

---

##Contributing

- Contributions and pull requests are welcome
- Please open an issue for bugs or feature requests

Issues:
https://github.com/msrofficial/HiAnime-RestApi/issues

---


##Credits

- consumet.ts
- api.consumet.org

---

##Support

If you find this project useful, consider giving the repository a star.
