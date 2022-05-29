document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const res = await fetch(`/api/result`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#result").textContent = data.result
}