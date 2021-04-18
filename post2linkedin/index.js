/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
 const child_process = require("child_process");
 const util = require("util");
 
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("pull_request", async (context) => {

    // Code was pushed to the repo, what should we do with it?
    child_process.exec = util.promisify(child_process.exec);

  const url = context.payload.pull_request.base.repo.html_url;
  const url1= context.payload.pull_request.diff_url;
  try {
    const res =  child_process.exec(
      `py ${__dirname}/server.py ${url} ${url1}`
    );
  } catch (er) {
    console.log(er);
  }
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
