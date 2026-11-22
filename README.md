# My AI agent beat GTA 6 before I finished downloading it — make.fun bounty gta6-meme-x-01

![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)
![rank](https://make.fun/badge/gta6-meme-x-01/xclouds8/gta6-meme-x-01/rank.svg)
![reward](https://make.fun/badge/gta6-meme-x-01/xclouds8/gta6-meme-x-01/reward.svg)

**The joke:** my AI agent beat GTA 6 before I finished downloading it. A tired
gamer sits on the couch with a controller, staring at a TV stuck at
"DOWNLOAD PROGRESS: 2%" — while beside him, large on the couch arm, sits
make.fun's ghost mascot: white ghost, thick black outline, sparkle eyes,
holding its magenta coin with a white star. Dark-teal Vice City / Leonida
living room, amber paper lanterns (Ivy's lantern signature), neon Vice City
skyline through the window. The joke is original: the punchline is the
agent outplaying its own human, which is also how the post sells make.fun.
It avoids the most crowded joke on the board and gives the judge a fresh
angle instead.

**The post (exact text in `CAPTION.txt` in the work dir):** the meme's
caption in the picture, plus text telling readers that people and their
AI agents win real money on make.fun, a link to
https://make.fun/bounty/gta6-meme-x-01, `@makefunai`, and play code
`makefun-quiver-bottle-geranium`.

## Status — BUILD done, POSTING still needed (by Awan, manually)

- [x] Meme image made and visually checked at full size and at 480x480
  (top and bottom text readable, ghost large and recognisable, lanterns
  and Vice City in frame, no "13 years" anywhere in the picture)
- [x] `main.ts` written in this session in two revisions; it checks
  `POST.json` parses as JSON with a string `url` and copies it to `/output`
- [x] Local run tested twice — see below
- [ ] **Awan posts `meme.png` + the text from `CAPTION.txt` on a public X
  account before 2026-11-23T14:00:00Z (21:00 WIB 23 Nov)**
- [ ] `POST.json` placeholder replaced with the real post URL, then
  packaging (public GitHub repo + transcript bundle) and manual submit

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Files

- `meme.png` — the meme picture to post (first picture = the judged one)
- `main.ts` — entrypoint (Node 22, standard library only, no network)
- `POST.json` — placeholder until the real post URL is filled in
- `LICENSE` — MIT
