export interface LeetCodeProfileData {
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  totalQuestions: number;
  acceptanceRate: number;
  ranking: number;
  contestRating: number;
  topPercentage: number;
  topicStats: { topic: string; count: number }[];
}

const FALLBACK_LEETCODE: LeetCodeProfileData = {
  username: "SaiAmirthesh",
  totalSolved: 140,
  easySolved: 52,
  mediumSolved: 76,
  hardSolved: 12,
  totalQuestions: 3300,
  acceptanceRate: 68.4,
  ranking: 135400,
  contestRating: 1724,
  topPercentage: 14.5,
  topicStats: [
    { topic: "Dynamic Programming", count: 32 },
    { topic: "Graph & Trees", count: 28 },
    { topic: "Backtracking", count: 22 },
    { topic: "Two Pointers & Arrays", count: 38 },
    { topic: "Binary Search", count: 18 },
  ],
};

export async function fetchLeetCodeProfile(username: string = "SaiAmirthesh"): Promise<LeetCodeProfileData> {
  try {
    // 1. Try local server-side API proxy first (bypasses browser CORS & SSL blocks)
    try {
      const localRes = await fetch("/api/leetcode");
      if (localRes.ok) {
        const gqlData = await localRes.json();
        if (gqlData?.data?.matchedUser) {
          const acList = gqlData.data.matchedUser.submitStats?.acSubmissionNum || [];
          const total = acList.find((item: any) => item.difficulty === "All")?.count || 140;
          const easy = acList.find((item: any) => item.difficulty === "Easy")?.count || 52;
          const medium = acList.find((item: any) => item.difficulty === "Medium")?.count || 76;
          const hard = acList.find((item: any) => item.difficulty === "Hard")?.count || 12;
          const rating = gqlData.data.userContestRanking?.rating ? Math.round(gqlData.data.userContestRanking.rating) : 1724;
          const ranking = gqlData.data.matchedUser.profile?.ranking || 135400;

          return {
            username,
            totalSolved: total,
            easySolved: easy,
            mediumSolved: medium,
            hardSolved: hard,
            totalQuestions: 3300,
            acceptanceRate: 68.4,
            ranking,
            contestRating: rating,
            topPercentage: gqlData.data.userContestRanking?.topPercentage || 14.5,
            topicStats: FALLBACK_LEETCODE.topicStats,
          };
        }
      }
    } catch {
      // ignore and try fallback endpoints
    }

    // 2. Direct LeetCode API proxies
    const endpoints = [
      `https://alfa-leetcode-api.onrender.com/userProfile/${username}`,
      `https://leetcode-stats-api.herokuapp.com/${username}`
    ];

    for (const url of endpoints) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data.totalSolved || data.matchedUser) {
            const total = data.totalSolved || data.matchedUser?.submitStats?.acSubmissionNum?.[0]?.count || 140;
            const easy = data.easySolved || data.matchedUser?.submitStats?.acSubmissionNum?.[1]?.count || 52;
            const medium = data.mediumSolved || data.matchedUser?.submitStats?.acSubmissionNum?.[2]?.count || 76;
            const hard = data.hardSolved || data.matchedUser?.submitStats?.acSubmissionNum?.[3]?.count || 12;
            const rating = data.contestRating || (data.userContestRanking?.rating ? Math.round(data.userContestRanking.rating) : 1724);

            return {
              username,
              totalSolved: total,
              easySolved: easy,
              mediumSolved: medium,
              hardSolved: hard,
              totalQuestions: data.totalQuestions || 3300,
              acceptanceRate: data.acceptanceRate || 68.4,
              ranking: data.ranking || 135400,
              contestRating: rating,
              topPercentage: data.userContestRanking?.topPercentage || 14.5,
              topicStats: FALLBACK_LEETCODE.topicStats,
            };
          }
        }
      } catch {
        // try next
      }
    }
  } catch (err) {
    console.error("LeetCode fetch failed:", err);
  }

  return FALLBACK_LEETCODE;
}
