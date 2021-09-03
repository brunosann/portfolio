const s = (el) => document.querySelector(el);

const getUser = async (name) => {
  const user = await fetch(`https://api.github.com/users/${name}`);
  const userJson = await user.json();

  const notShow = ["brunosann/modulogit"];
  const repositories = await fetch(
    `https://api.github.com/users/${name}/repos?sort=update`
  );
  let repos = await repositories.json();
  repos = repos.filter((repo) => !repo.fork);
  repos = repos.filter(
    (repo) => notShow.findIndex((name) => name === repo.full_name) === -1
  );
  repos = repos.map((repo) => ({
    id: repo.id,
    full_name: repo.full_name,
    language: repo.language,
  }));
  return {
    userJson,
    repos,
  };
};

const addListRepository = async () => {
  const { repos, userJson } = await getUser("brunosann");
  const transformHtml = repos.map(
    ({ full_name, language }) => `
    <div class="rounded-md bg-white p-4 hover:shadow-md">
      <a target="_blank" href="https://github.com/${full_name}" class="font-bold text-lg">
        ${full_name}
      </a>
      <span class="block">${language}</span>
    </div>
  `
  );

  s(".public_repos").innerText = userJson.public_repos;
  s(".followers").innerText = userJson.followers;
  s("#repository").innerHTML = transformHtml.join(" ");
};
addListRepository();

console.log("testando webhook github");
