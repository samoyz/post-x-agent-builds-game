# post-x-agent-builds-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/samoyz/post-x-agent-builds-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/samoyz/post-x-agent-builds-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game from one prompt, and filmed it: **Gravity Flip**, a neon one-button runner. The ship runs on its own; one tap (or Space) flips gravity between the floor and the ceiling. Dodge the spikes, collect the stars, don't fall into the void. The video shows the prompt, the agent working, and the game running, and ends with make.fun's referral end card.

The entry is the X post: its views plus 10 times its likes, reposts, quotes and replies decide the places. `POST.json` names that post, and `main.ts` hands it to the house.

## The game

`game/gravity-flip.html` is the whole game in one self-contained file: canvas, no dependencies, no network. Open it in a browser and press Space (or tap) to flip gravity. The first star is the first goal; the spikes are the end.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wfayqtx9&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
