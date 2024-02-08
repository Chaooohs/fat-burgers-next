
// On the server, with fetch
export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}


// On the client, via a Route Handler
export async function getBurgers() {
  const res = await fetch('https://raw.githubusercontent.com/Chaooohs/JSON-resume/master/fat-burgers.json');

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  
  const data = await res.json()
  return data.items;
}
