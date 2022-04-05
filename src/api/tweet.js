import client from './client.js';

const tweetsBaseURL = '/api';


export default function getLatestTweets () {  //tweets?_expand=user&_embed=likes&_sort=createdAt&_order=desc
    const url = `${tweetsBaseURL}/tweets`;
    return client.get(url); //that way we can call to axios
}