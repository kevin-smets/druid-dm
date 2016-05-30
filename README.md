# druid-dm

Druid-dm watches over the dependencies of your Node.js projects

## Install globally

```
npm i -g druid-dm
```

## Local config

Add a `locals.json` to the root directory, e.g.:

```
{
  "dep-rep": "https://raw.githubusercontent.com/kevin-smets/dep-rep/master/package.json",
  "druid-dm": "../druid-dm/package.json"
}
```

## Run

For help, run `ddm -h`

```
ddm [--port 3000]
```

Druid DM will run on `http://localhost:3221` (or another port if you specified one).
