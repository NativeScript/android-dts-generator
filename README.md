# Android d.ts Generator
A tool that generates TypeScript declaration files (.d.ts) from Jars

> Because there are certain incompatibilities between Java and TypeScript, definitions MAY NOT always be completely accurate. They will however compile and provide auto complete feature inside a modern text editor supporting typings.

## Quirks
 - Interfaces are represented by classes, this will allow you to extend them by using the `new` syntax, as well as show you all its members that need to be implemented
 - Classes from the package `java.util.function` don't have their typings generated, as `function` is a reserved keyword in TypeScript and JavaScript
 - Classes returning values of Type in the package `java.util.function` will return `any` instead
 - Classes using methods with parameters of Type in the package `java.util.function` will take `any` instead
 - Classes implementing `java.util.Iterator`, `android.animation.TypeEvaluator`, `java.lang.Comparable` do not implement those interfaces in the generated definitions for compatibility-related issues


## Prerequisites
- [Gradle](https://docs.gradle.org/current/userguide/gradle_wrapper.html)
- Built gradle wrapper. [Read more](https://docs.gradle.org/current/userguide/gradle_wrapper.html#sec:adding_wrapper)


Generate definitions following any of the approaches described below. Once you have run any of commands, you can find the generated typings in `dts-generator\out` directory.
## Generate definitons for Android SDK
```shell
cd dts-generator
gradlew jar
java -jar build\libs\dts-generator.jar -input %ANDROID_HOME%\platforms\android-<Platform Level (21/22/23/24)>\android.jar
```

## Generate definitions for any Jar
```shell
cd dts-generator
gradlew jar
java -jar build\libs\dts-generator.jar -input <Path to your Jar>
```

## Pass multiple jars to generator
```shell
cd dts-generator
./gradlew jar
java -jar build\libs\dts-generator.jar -input <jar1> <jar2> <jar3>
```

## Generate definitions for .aar
```
Open the .aar archive
Extract the classes.jar and any dependencies it may have inside libs/
Rename classes.jar if necessary
```
```shell
java -jar build\libs\dts-generator.jar -input classes.jar dependency-of-classes-jar.jar
```

## Support libraries
In the [lib](lib) folder there are android support libraries jars which are get from the following git repos:
* [android-support-v4](https://github.com/dandar3/android-support-v4/tree/master/libs)
* [android-support-v7-appcompat](https://github.com/dandar3/android-support-v7-appcompat/tree/master/libs)
* [android-support-design](https://github.com/dandar3/android-support-design/tree/master/libs)
