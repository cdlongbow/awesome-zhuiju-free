import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const resourcesPath = new URL("resources/resources.json", root);
const timeZone = "Asia/Shanghai";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function todayInTimeZone() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function githubHeaders() {
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "awesome-zhuiju-free"
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  return headers;
}

async function fetchRepo(fullName) {
  const response = await fetch(`https://api.github.com/repos/${fullName}`, {
    headers: githubHeaders()
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub API failed for ${fullName}: ${response.status} ${body}`);
  }

  return response.json();
}

let resourcesText = await readFile(resourcesPath, "utf8");
const resourcesData = JSON.parse(resourcesText);
let changed = false;

for (const resource of resourcesData.resources) {
  if (resource.category !== "open_source") {
    continue;
  }

  const fullName = resource.github?.full_name;
  if (!fullName) {
    throw new Error(`${resource.id}: open source resource must have github.full_name`);
  }

  const repo = await fetchRepo(fullName);
  const stars = repo.stargazers_count;
  const pushedAt = repo.pushed_at;

  if (resource.github.stars !== stars || resource.github.pushed_at !== pushedAt) {
    const pattern = new RegExp(
      `("full_name":\\s*"${escapeRegExp(fullName)}"[\\s\\S]*?"stars":\\s*)\\d+([\\s\\S]*?"pushed_at":\\s*")[^"]+(")`
    );

    if (!pattern.test(resourcesText)) {
      throw new Error(`${resource.id}: cannot locate github stats block`);
    }

    resourcesText = resourcesText.replace(pattern, `$1${stars}$2${pushedAt}$3`);
    changed = true;
    console.log(`${fullName}: ${stars} stars, pushed at ${pushedAt}`);
  } else {
    console.log(`${fullName}: already up to date`);
  }
}

if (changed) {
  resourcesText = resourcesText.replace(
    /("updated_at":\s*)"\d{4}-\d{2}-\d{2}"/,
    `$1"${todayInTimeZone()}"`
  );
  await writeFile(resourcesPath, resourcesText, "utf8");
  console.log("Open source stats updated.");
} else {
  console.log("Open source stats are already up to date.");
}
