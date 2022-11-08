async function getWords () {
  return fetch("./data/words.json")
  .then(res => res.json())
  .then(data => data)
}