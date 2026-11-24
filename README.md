# One Word for Your Wi-Fi — Traitor

[![make.fun](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/bagusin03/wifi-traitor/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/bagusin03/wifi-traitor/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

One word, 7 characters, describing my Wi-Fi: it abandons you at the exact moment you need it most — mid-call, mid-download, mid-game. A traitor.

`main.ts` writes the single word to `/output/entry.txt`:

> Traitor

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–20 character single-word gate and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
