import type { GithubRepo } from './types';

const GITHUB_USER = 'ajimenezdev';
const TOP_N = 6;

/**
 * Fetches Álvaro's public repositories at BUILD TIME (runs inside Astro
 * frontmatter, so this never executes in the browser). Non-forks, sorted by
 * stars, top N. Never throws: on any failure it resolves to [] so the build
 * can't break for network reasons.
 */
export async function fetchTopRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
      {
        headers: {
          'User-Agent': 'personal-page-build',
          Accept: 'application/vnd.github+json',
        },
      },
    );
    if (!res.ok) return [];
    const all = (await res.json()) as GithubRepo[];
    return all
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, TOP_N);
  } catch {
    return [];
  }
}

export function githubProfileUrl(): string {
  return `https://github.com/${GITHUB_USER}/`;
}
