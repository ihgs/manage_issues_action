const github = require('@actions/github');
const core = require('@actions/core');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const myToken = core.getInput('myToken');
    const octokit = github.getOctokit(myToken)

    const owner = process.env.GITHUB_OWNER;
    // const repo = process.env.GITHUB_REPOSITORY;
    const repo = "yaml2gantt";
    core.info(owner)
    const {data: test} = await octokit.search.issuesAndPullRequests(
      {
        q: `repo:${owner}/${repo} is:open`
      }
    )
    core.info(JSON.stringify(test));

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
