// codez
async function load(repoPath: string): Promise<Cache> {
	if (!repoPath.endsWith(".git")) {
		repoPath = path.join(repoPath, ".git");
	}