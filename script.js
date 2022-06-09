const post = async () => {
    const response = await fetch("https://www.reddit.com/r/aww/.json");
    const jsonData = await response.json();
    return jsonData;
}

const anotherPost = async () => {
    const data = await post();
    console.log(data);
}

anotherPost();