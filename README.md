![theWall](https://raw.githubusercontent.com/dejanfajfar/thewall/master/misc/title.jpeg)

# theWALL

A simple [svelte](https://svelte.dev/) learning experience.

## Motivation

The best way to learn a new thing is to work with sed thing. So here we are. A little svelte application to take the thing for a test ride

## Goal

Because of the dropping prises of TVs and raspberries there are many monitors/TVs that have nothing to display. For those I have created a little **joke** application to display random humorous facts from the interned and give the monitors a purpose.

## Infrastructure

A simple website with no server site component to it. 

### External resources

* Ron Swanson quotes service: http://ron-swanson-quotes.herokuapp.com/v2/quotes
* Youtube: https:/youtube.com
* News feed: newsapi.org

## Docker

[![](https://images.microbadger.com/badges/image/dejanfajfar/thewall.svg)](https://microbadger.com/images/dejanfajfar/thewall "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/dejanfajfar/thewall.svg)](https://microbadger.com/images/dejanfajfar/thewall "Get your own version badge on microbadger.com")

Just for the sake of it this "wall" is available as a docker image on docker hub

[dejanfajfar/thewall](https://hub.docker.com/r/dejanfajfar/thewall)

When started it just exposes port 80 and provides you with the _wall_

```bash
docker run -p 8080:80 dejanfajfar/thewall
```

Now it is available at http://localhost:8080

## Herokuapp

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

If you do not want to pull any images and just want to run it somewhere. You can! 

Just navigate to https://thewall-site.herokuapp.com/

And enjoy...