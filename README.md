# 🛠️ Web Tools Dashboard

A centralized, dynamically generated dashboard hosting a collection of school-safe utilities, assets, and web generators for the r/unblockedgames community.

💬 **Join our Community:** [Join the Catclass Discord Server](https://discord.catclass.org)

Check the tools [here](https://task4z.github.io/tools/)

---

## 🚀 About This Repository

This repository uses a completely **dynamic architecture**. The main landing page (`index.html`) automatically scans the repository via the GitHub REST API to detect subfolders and render interactive web cards on the fly. 

Whenever a new tool folder is added to the repository, it automatically populates on the live site with zero manual updates required on the homepage code.

### Current Features
* **SVG URL Generator (`/svg_generator_from_url`)** - Instantly turn image web URLs into clean, fully-optimized SVG code assets.

---

## 📂 Project Structure

To maintain the dynamic tracking system, your local directory setup must match this structure exactly:

```text
├── index.html                        # The dynamic dashboard core file
├── README.md                         # Project documentation (You are here)
├── public_git_svg_to_links/
│   └── index.html                    # GitHub SVG compilation utility
└── ...                               # Any other tool
    └── index.html                    # index.html for that tool
