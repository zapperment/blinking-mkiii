# Blinking MkIII

Let's make the SL MkIII blink!

## Prerequisites

You should have the latest version of Node.js installed (at least version 20).

## Setup

You only have to do this once...

### Install dependencies

We use the Yarn package manager, so you install dependencies like this:

```
yarn
```

### Configuration

To tell the script which MIDI in and out ports to use, we use a _.env_ file.
Copy the provided example file:

```
cp .env.example .env
```

In the _.env_ file, you'll see configuration options for MIDI in and out ports.
Change these according to your setup. If you are unsure what values to put in
the _.env_ file, you can run a helper script that lists all available ports:

```
yarn list-ports
```

## Running the script

Run the script like this:

```
yarn start
```
