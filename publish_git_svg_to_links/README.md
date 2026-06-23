# CDN Link Generator

A lightweight, single-page web utility that quickly generates production-ready CDN URLs for files hosted on GitHub. Input your user details and file path to instantly receive an assortment of deduplicated links across various popular mirrors, edges, and alternative CDN networks.

## Features

* **Zero Dependencies:** Pure HTML, CSS, and Vanilla JavaScript.
* **Aggregated CDN Ecosystems:** Supports multiple variations of popular providers including:
  * **jsDelivr** (Main networks, Fastly, GCore, Quantil, testingcf, BunnyCDN)
  * **esm.sh** (Core, code, cdn, and raw formats)
  * **Statically** & **GitHack** (Raw and production-cached alternatives)
* **Smart Formatting:** Automatic handling of varying syntax structures (e.g., using `@branch` vs `/branch/` depending on the platform's requirements).

---

## Supported CDNs

The system generates links across a diverse array of provider endpoints:

| Provider | Endpoint Syntax Preview |
| --- | --- |
| **jsDelivr Core** | `cdn.jsdelivr.net/gh/user/repo@branch/path` |
| **jsDelivr Mirrors** | `fastly`, `gcore`, `quantil`, `testingcf`, `b-cdn` |
| **esm.sh** | `esm.sh`, `code.esm.sh`, `cdn.esm.sh`, `raw.esm.sh` |
| **Statically** | `cdn.statically.io/gh/...` |
| **GitHack** | `raw.githack.com`, `rawcdn.githack.com` |

---