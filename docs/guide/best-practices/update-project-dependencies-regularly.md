# Update Project Dependencies Regularly

A lot of people choose to lock down their project's dependencies and stay in a specific version, which ensures that builds are repeatable, eliminates unexpected problems due to changes in dependency versions, and makes builds more reliable and predictable. centOS is a prime example of this, locking down a set of dependencies, such as GCC, to ensure that builds work properly.

The drawbacks of this approach are obvious. Known bugs, security holes, and performance issues in dependencies persist, making it more difficult to upgrade the dependencies for any reason. CentOS locks down GCC versions so that tools that depend on the newer version of GCC don't compile correctly, and you either have to downgrade the tools to a version that no one else maintains, or manually compile an updated version of GCC, which can be quite an ordeal.

Regularly updating project dependencies is encouraged as it prevents version drift (a growing gap between a project's dependencies and the latest version) and keeps the project stable, secure, and efficient, which is a best practice for keeping a project healthy and secure. Also, to avoid failing builds by updating dependencies, you can create a new Git branch to test the build after updating the dependencies and merge it if there are no problems.

You can use [taze](https://github.com/antfu-collective/taze) or [npm-check-updates](https://github.com/raineorshine/npm-check-updates) to update your project's dependencies.

::: code-group

```shell [taze]
npx taze # checkups only, no writes
npx taze -r # Check in depth
npx taze -f # Do not accept cached ground checks
npx taze -w # write to file
npx taze major # check only for major version number updates
npx taze minor # Check for minor version number updates only
npx taze patch # Check for patch version number updates only.
```

```shell [npm-check-updates]
npx npm-check-updates # Check only for updates, not writes
npx npm-check-updates --deep # deep checking
npx npm-check-updates -i # check only, no write, interactive
npx npm-check-updates -u # write to files
npx npm-check-updates -t major # check for major version number updates only
npx npm-check-updates -t minor # Check for minor version number updates only
npx npm-check-updates -t patch # Check for patch updates only
```

:::
