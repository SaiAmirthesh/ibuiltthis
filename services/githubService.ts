export interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GithubContributionsData {
  total: number;
  contributions: ContributionDay[];
}

export interface GithubStats {
  totalContributions: number;
  publicRepos: number;
  followers: number;
  following: number;
}

export async function fetchGithubContributions(username: string = "SaiAmirthesh"): Promise<GithubContributionsData> {
  try {
    // 1. Try local API proxy route first, then direct public API
    const endpoints = [
      `/api/github`,
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
    ];

    for (const url of endpoints) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data && Array.isArray(data.contributions)) {
            return {
              total: data.total?.lastYear || data.contributions.reduce((acc: number, c: any) => acc + (c.count || 0), 0) || 428,
              contributions: data.contributions,
            };
          }
        }
      } catch {
        // try next
      }
    }
  } catch (err) {
    console.error("Failed to fetch real GitHub heatmap:", err);
  }

  // Fallback if network is offline
  return {
    total: 428,
    contributions: [],
  };
}

export async function fetchGithubStats(username: string = "SaiAmirthesh"): Promise<GithubStats> {
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const userData = userRes.ok ? await userRes.json() : null;

    return {
      totalContributions: 428,
      publicRepos: userData?.public_repos || 27,
      followers: userData?.followers || 15,
      following: userData?.following || 10,
    };
  } catch {
    return {
      totalContributions: 428,
      publicRepos: 27,
      followers: 15,
      following: 10,
    };
  }
}
