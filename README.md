# druid-dm

Druid-dm watches over the dependencies of your Node.js projects

# Local config

Add a `locals.json` to the root directory, e.g.:

```
{
  "dep-rep": "../dep-rep/package.json",
  "druid-dm": "../druid-dm/package.json",
  "druids": "../druids/package.json"
}
```

# Run

```
npm start
```

Druid DM will run on `http://localhost:3061`
