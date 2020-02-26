<p align="center"><a href="#"><img width="150" src="https://rawgit.com/sysgears/apollo-universal-starter-kit/master/logo.svg"></a></p>

# Tic-Tac-Toe Game With Apollo Universal Starter Kit

## Official Website

Visit [apollokit.org] to learn about Apollo Universal Starter Kit. You can also test a [demo application] deployed on
Heroku.

## Description

Apollo Universal Starter Kit is an SEO-friendly, fully configured, modular starter project for developing [Universal
JavaScript] applications. You can use this kit to create your applications in JavaScript or TypeScript for all major
platforms &ndash; mobile, web, and server.

Apollo Universal Starter Kit is built with [Apollo], [GraphQL], [React], [Angular], [React Native], [Expo], [Knex.js],
and [Express] with support for relational databases such as PostgreSQL, MySQL, and SQLite.

[TypeScript] is our language of choice and we use it across the entire project. However, you can freely mix vanilla
JavaScript (the ES6 and ES7 syntax) and TypeScript when creating your modules.


## First Run of Apollo Universal Starter Kit

Verify if you use Node.js 6.x or higher (Node.js ^10 is recommended) before running the starter kit.

1. Clone the stable branch of Apollo Universal Starter Kit.

```
git clone -b stable https://github.com/ishanajmeri/tic-tac-toe
cd tic-tac-toe
```

**NOTE**: The master branch is not recommended for development. Use it at your own risk.

**NOTE**: If you're going to use Windows to develop with Apollo Universal Starter Kit, you need to additionally enable
symlinks _before_ you run the project.

For Windows 10:

* Press `Win` + `I` to open **Settings**
* Click **Update & Security**
* Click the **For Developers** tab
* In the **Use developer features** window, switch to **Developer Mode**

**NOTE**: You can remove the unnecessary stacks from Apollo Universal Starter Kit by using the CLI. Consult a
[respective CLI section]. Alternatively, you can use the capabilities of your operating system. For example, by running
the command below, you can remove all Scala server files:

```bash
find -name server-scala | xargs rm -rf
```

If you don't need the ready-made modules, you can also remove them using the [custom CLI].

2. Install the dependencies. Make sure that you use Yarn 1.0.0 or higher.

```
yarn
```

You can use NPM instead of Yarn to handle the starter kit dependencies and to run scripts. Throughout the Apollo
Universal Starter Kit documentation, we'll always use Yarn.

3. Seed sample data to the database. The command below will create new tables with sample data in SQLite:

```
yarn seed
```

SQLite is a typical default relational database installed in most Linux distributions including Mac OS X; otherwise,
consult [SQLite installation guide].

4. Run the starter kit in development mode:

```
yarn watch
```

The server application will be running on [http://localhost:3000], while the client application will be running on
[http://localhost:8080]. The terminal will tell your the exact ports.

## Functions used to make Game
1. Formik Library
2. Ant Design React UI library
3. React-translate

[our chat]: https://gitter.im/sysgears/apollo-fullstack-starter-kit
[mit]: LICENSE
[universal javascript]: https://medium.com/@mjackson/universal-javascript-4761051b7ae9
[apollo]: http://www.apollostack.com
[graphql]: http://graphql.org
[jwt]: https://jwt.io
[react]: https://reactjs.org/
[angular]: https://angular.io/
[react native]: https://facebook.github.io/react-native/
[expo]: https://expo.io/
[knex.js]: http://knexjs.org
[express]: http://expressjs.com
[typescript]: https://www.typescriptlang.org/
[twitter bootstrap]: http://getbootstrap.com
[ant design]: https://ant.design
[nativebase]: https://nativebase.io
[apollokit.org]: https://apollokit.org
[demo application]: https://apollo-universal-starter-kit.herokuapp.com
[react native gifted chat]: https://github.com/FaridSafi/react-native-gifted-chat
[deployed on heroku]: https://apollo-universal-starter-kit.herokuapp.com
[this demo on Expo.io]: https://expo.io/@sysgears/apollo-universal-starter-kit
[stable]: https://github.com/sysgears/apollo-universal-starter-kit/tree/stable
[master]: https://github.com/sysgears/apollo-universal-starter-kit/tree/master
[single]: https://github.com/sysgears/apollo-universal-starter-kit/tree/single
[apollo1]: https://github.com/sysgears/apollo-universal-starter-kit/tree/apollo1
[cli-crud]: https://github.com/sysgears/apollo-universal-starter-kit/tree/cli-crud
[custom cli]: https://github.com/sysgears/apollo-universal-starter-kit/tree/cli-crud
[sqlite installation guide]: http://www.sqlitetutorial.net/download-install-sqlite/
[http://localhost:3000]: http://localhost:3000
[http://localhost:8080]: http://localhost:8080
[getting started]: /docs/Getting%20Started.md
[installing and running apollo universal starter kit]: /docs/Getting%20Started.md#installing-and-running-apollo-universal-starter-kit
[running the mobile app with expo]: /docs/Getting%20Started.md#running-the-mobile-app-with-expo
[running the starter kit in a mobile simulator]: /docs/Getting%20Started.md#running-the-starter-kit-in-a-mobile-simulator
[running apollo universal starter kit with docker]: /docs/Docker.md
[deploying apollo universal starter kit to production]: /docs/Deployment.md
[configuring apollo universal starter kit]: /docs/Configuration.md
[dedicated cli]: /docs/tools/CLI.md#deleting-features-with-deletemodule
[respective cli section]: /docs/tools/CLI.md#selecting-the-technology-stack-with-choosestack
[features and modules]: /docs/Features%20and%20Modules.md
[writing code]: /docs/Writing%20Code.md
[debugging code]: /docs/Debugging.md
[apollo universal starter kit cli]: /docs/tools/CLI.md
[available scripts]: /docs/Yarn%20Scripts.md
[stripe payments]: /docs/modules/Stripe%20Subscription.md
[mobile chat]: /docs/modules/Mobile%20Chat.md
[project structure]: /docs/Project%20Structure.md
[importing modules]: /docs/Importing%20Modules.md
[frequently asked questions]: /docs/FAQ.md
[sysgears (cyprus) limited]: http://sysgears.com
[gitter channel]: https://gitter.im/sysgears/apollo-fullstack-starter-kit
[github issues]: https://github.com/sysgears/apollo-universal-starter-kit/issues
[wiki]: https://github.com/sysgears/apollo-universal-starter-kit/wiki
[faq]: /docs/FAQ.md
[sysgears]: https://sysgears.com
[skype]: http://hatscripts.com/addskype?sysgears
