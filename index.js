const github = require('@actions/github');
const core = require('@actions/core');


// most @actions toolkit packages have async methods
async function run() {
  try {
    const myToken = core.getInput('myToken');
    const octokit = github.getOctokit(myToken)

    const owner = process.env.GITHUB_OWNER;
    // const repo_name = os.environ["GITHUB_REPOSITORY"];
    const repo_name = "yaml2gantt";
    core.log(owner)
    const {data: test} = await octokit.issues.get(
      {
        owner,
        repo_name
      }
    )
    core.info(test);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
