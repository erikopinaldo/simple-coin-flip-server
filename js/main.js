document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){
    try {
        const res = await fetch(`/api/result`)
        const data = await res.json()
        console.log(data);
        document.querySelector("#result").textContent = data.result
    }
    catch(error) {
        console.log(error)
    }
}