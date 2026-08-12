---
section: apps
metadataEnrichedAt: null
title: Convex
author: Diane
tags:
- Outils
description: 'Découvre Convex : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

# Chef

Chef is an AI app builder that builds complex full-stack apps. It leverages the full power of the Convex platform to one-shot apps like Slack, Instagram, and Notion.

This means Chef can: build real-time apps, upload files, do text search and take advantage of Convex Components.

## [Prompt to start an app with Convex Chef](https://chef.convex.dev)


## Deploying to production[​](#deploying-to-production "Direct link to Deploying to production")

Chef does have a built in ability to deploy your the dev version of your app for you to immediately share with your friends to try.

For apps intended to be built and maintained over the long term, we recommend downloading the code and importing it into your preferred IDE. When you download the code from Chef, your project automatically comes with [Cursor rules for Convex](/ai.md), helping you keep coding with confidence.

### Download the code[​](#download-the-code "Direct link to Download the code")


At the top right of the Chef UI there is a download code button. Download the code and you’ll get a zip file.

Unzip the file and put the folder in your desired location. We recommend renaming the folder to the name of your app for convenience. For the rest of the setup, open up the terminal and `cd` into your app:

```
cd ~/<app folder>
```

### Install dependencies[​](#install-dependencies "Direct link to Install dependencies")

Run the following command to install all dependencies for your project

```
npm i
```

### Run your app[​](#run-your-app "Direct link to Run your app")

Run the following command run your app, and setup Convex if you haven’t already.

```
npm run dev
```

Follow any instructions to login to Convex from your machine.

caution

You have now taken over from Chef for development of this app. Chef doesn't have the ability to re-import a project or track any progress from outside it. Going back to this project on Chef will cause conflicts in your project.

### Set up the frontend build script[​](#set-up-the-frontend-build-script "Direct link to Set up the frontend build script")

Chef projects don’t come with a build script. So make sure to add the following to your `package.json` file:

```
  "scripts": {
		//... other scripts
    "build": "vite build"
  },
```

### Recommended: Setup Git[​](#recommended-setup-git "Direct link to Recommended: Setup Git")

In the terminal run the following three commands setup git for your app. The downloaded code comes with a `.gitignore` file.

```
git init
git add --all
git commit -m "Initial commit"
```

It's also recommended you setup a remote git repository with [GitHub](https://github.com/) if you're going to use the production hosting guides below.

### Set up production frontend hosting[​](#set-up-production-frontend-hosting "Direct link to Set up production frontend hosting")

Follow one of the Convex [hosting guides](/production/hosting/.md) to set up frontend hosting and continuous deployment of your frontend and backend code.

### Initialize Convex Auth for Prod[​](#initialize-convex-auth-for-prod "Direct link to Initialize Convex Auth for Prod")

Once you have a production deployment. You need to [set up Convex Auth for production](https://labs.convex.dev/auth/production).

## Integrations[​](#integrations "Direct link to Integrations")

### OpenAI[​](#openai "Direct link to OpenAI")

If you ask Chef to use AI, by default it will try to use the built in OpenAI proxy with a limited number of calls. This helps you prototype your AI app idea quickly.

However, at some point the built in number of calls will run out and you'll need to provide your own OpenAI API Key and remove the proxy URL.

So that means you'll have to find the code that looks like this:

```
const openai = new OpenAI({
  baseURL: process.env.CONVEX_OPENAI_BASE_URL,
  apiKey: process.env.CONVEX_OPENAI_API_KEY,
});
```

And remove the baseURL parameter:

```
const openai = new OpenAI({
  apiKey: process.env.CONVEX_OPENAI_API_KEY,
});
```

Chef may automatically prompt you to change the environment variable. But if it doesn't, you can change it by going to the "Database" tab. Then click on Settings > Environment Variables and change `CONVEX_OPENAI_API_KEY` to your [personal OpenAI key](https://platform.openai.com).

We plan on making this transition better over time.

### Resend[​](#resend "Direct link to Resend")

Chef comes with a built in way to send emails to yourself via Resend. You can only send emails to the account you used to log into Chef. To send emails to anyone, you have to setup your app for production with a domain name. This is a limitation of how email providers work to combat spam.

## FAQs[​](#faqs "Direct link to FAQs")

### What browsers does Chef support?[​](#what-browsers-does-chef-support "Direct link to What browsers does Chef support?")

Chef is best used on desktop/laptop browsers. It may work on some tablet or mobile browsers. Chef does not work in Safari on any platform.

### How does the pricing for Chef work?[​](#how-does-the-pricing-for-chef-work "Direct link to How does the pricing for Chef work?")

Chef pricing is primarily based on AI token usage. The free plan gives you enough tokens to build the first version of your app in a small number of prompts. After that you can upgrade to the Starter plan that where you can pay for tokens as you go.

### What’s the difference between Chef and Convex?[​](#whats-the-difference-between-chef-and-convex "Direct link to What’s the difference between Chef and Convex?")

Chef is an AI app builder that builds full-stack apps. Convex is the backend and database that powers Chef.

### Can I import my existing app to Chef?[​](#can-i-import-my-existing-app-to-chef "Direct link to Can I import my existing app to Chef?")

Chef currently doesn’t have import and GitHub integration. But you can get most of the value by setting up the [Convex AI Rules and MCP server](/ai.md) in your Agentic IDE like Cursor.

### Are there any best practices for Chef?[​](#are-there-any-best-practices-for-chef "Direct link to Are there any best practices for Chef?")

Yes! Check out this [tips post written by one of our engineers](https://stack.convex.dev/chef-cookbook-tips-working-with-ai-app-builders).

### What Convex Components can Chef use?[​](#what-convex-components-can-chef-use "Direct link to What Convex Components can Chef use?")

Chef can use the [collaborative text editor](https://www.convex.dev/components/prosemirror-sync) component and the [presence](https://www.convex.dev/components/presence) component. We will support more components soon. Chef supports all other Convex features like text search, file storage, etc.

## Limitations[​](#limitations "Direct link to Limitations")

Chef works off a singular template with Convex, Convex Auth and React powered by Vite. Switching these technologies is not supported by Chef.

# Running Locally
Note: This will use our control plane to provision Convex projects. However, Chef tokens used in this enviroment will not count towards usage in your Convex account.

1. Set up local environment

Run the following commands in your terminal:

nvm install
nvm use
npm install -g pnpm
pnpm i
echo 'VITE_CONVEX_URL=placeholder' >> .env.local
npx convex dev --once # follow the steps to create a convex project in your team
2. Set up Chef OAuth application

Go to the Convex dashboard and create an OAuth application. Redirect URIs will not matter for Chef, but you can set one to http://127.0.0.1:5173 (or whatever port you’ll run the Chef UI on) so that the form can be submitted. To develop using Chef locally, your OAuth app will need to be verified by the Convex team. Contact a Convex team member or click the “Request Verification” menu option to continue.

3. Set up Convex deployment

Open the Convex dashboard and go to Settings → Environment Variables. Then, set the following environment variables:

BIG_BRAIN_HOST=https://api.convex.dev
CONVEX_OAUTH_CLIENT_ID=<value from oauth setup>
CONVEX_OAUTH_CLIENT_SECRET=<value from oauth setup>
4. Add API keys for model providers

Add any of the following API keys in order to enable code generation:

ANTHROPIC_API_KEY=<your api key>
GOOGLE_API_KEY=<your api key>
OPENAI_API_KEY=<your api key>
XAI_API_KEY=<your api key>
Note: you can also add your own API keys through the settings page.

4. Run Chef backend and frontend

Run the following commands in your terminal:

pnpm i
pnpm run dev

## in another terminal
npx convex dev
Congratulations, you now have Chef running locally! You can log in to Chef with your existing Convex account.

Repository Layout
app/ contains all of the client side code and some serverless APIs.

components/ defines the UI components
lib/ contains client-side logic for syncing local state with the server
routes/ defines some client and server routes
chef-agent/ handles the agentic loop by injecting system prompts, defining tools, and calling out to model providers.

chefshot/ defines a CLI interface for interacting with the Chef webapp.

convex/ contains the database that stores chats and user metadata.

template/ contains the template that we use to start all Chef projects.

test-kitchen/ contains a test harness for the Chef agent loop.