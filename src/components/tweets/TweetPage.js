const tweets = [
    {
        "content": "Marty McFly returns with new film of classical Back to the Future",
        "userId": 1,
        "updateAt": "2021-03-15T18:23:57.579Z",
        "id": 1
    },
    {
        "content": "Aca las tortas, Cine Mexicano de Oro",
        "userId": 1,
        "updateAt": "2021-03-15T18:24:56.773Z",
        "id": 2
    }
]

export default function TweetsPage() {
    const mostrarTweets = tweets.map ( (tweet) => {
        return <li key= {tweet.id}>{tweet.content}</li>
    });
    console.log(mostrarTweets);
    return (
        <div className="tweetsPage">
            <ul>
                {tweets.map( tweet => (
                    <li key= {tweet.id} >{tweet.content}</li>
                ))}
            </ul>
            <ul>
                {mostrarTweets}
            </ul>
        </div>
    );
};

 
