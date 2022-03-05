# Android d.ts Generator
A tool that generates TypeScript declaration files (.d.ts) from Jars/Aars

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


Generate definitions following any of the approaches described below. Once you have run any of commands, you can find the generated typings in `dts-generator/out` directory.
## Generate definitons for Android SDK
```shell
cd dts-generator
./gradlew jar
java -jar build/libs/dts-generator.jar -input %ANDROID_HOME%/platforms/android-<Platform Level (21/22/23/24)>/android.jar
```

## Generate definitions for any Jar/Aar
```shell
cd dts-generator
./gradlew jar
java -jar build/libs/dts-generator.jar -input <Path to your Jar/Aar>
```

## Pass multiple jars/aars to generator
```shell
cd dts-generator
./gradlew jar
java -jar build/libs/dts-generator.jar -input <jar1> <jar2> <jar3>
```
Another option is to pass the folder containing the jars you want to pass
```shell
cd dts-generator
./gradlew jar
java -jar build/libs/dts-generator.jar -input <jarFolder>
```

> Note: Check the [Makefile](Makefile) for sample usage

## Test

In order to test the tool there are some predefined androuidx packages. We are running the tool and comparing the output with the expected output commited in the repo.
To run the test:

```shell
make test-compare-output
```

Then check whether the make command will return an error comparing the files.

> Note: If the libs folder content is changed, the expected output should also be changed

## Generate definitions for .aar
Pass the aar as input as you would normally do

## Complex typings generation
Generating the typings corresponding to the android and android-support jar files is a bit tricky operation, so here's a detailed explanation how to do it.
There are different andoid support versions and they depend on main android classes it is a little bit complicated to generate those typings. One option is to generate a big **d.ts** file with all the libraries inside. The downside of this approach is that you have to generate a big file for every API level and if the android support version is changed all those **d.ts** files need to be regenerated.
To avoid this there's some functionality in the tool for passing dependencies when generating typings.
There are two type of dependencies that can be passed:

1. Super class jars - this is needed when the current jar has classes which are extending classes from another jar file, but we don't want to have all that jar files' typings in a single output file. To achieve this we can provide the super class jar with the **super** argument(which works the same way as **input** for multiple files).
  For instance if we want to generate typings for **android.support.v4.view.ViewPager** and we don't pass the super classes jar the generated typings won't extend any class as there's no information in the jar that contains the ViewPager. However this class extends **android.view.ViewGroup** class which is a part of the android jar file(any of the API levels). So if we pass one of the android.jar files as a super class jar file the generated typing will contain `extends android.view.ViewGroup`.
2. Input generics - When trying to get the type of a parameter which is a generic class we cannot really get the generic types of that class, so we cannot generate working typings. To fix this we are adding information about the generics of each package at the end of the file with comments starting with `//Generics information:`.
  So to fix this we need to provide a file with all the generic information for the packages the current jar relies on. You need to create a file and copy all the generic informations of the related packages and provide it in the **input-generics** argument. This will make all the generic classes referenced without passing types to pass **any** so that the ouput will be valid.

## Adding all implements for generic types
There is an option **all-generic-implements** which is disabled by default which controls whether to add implements for all interfaces (if they are more than one) to generic type declarations. The problem is that in most of the cases one of those interfaces is actually an extend, so it should be manual reviewed and fixed after generation.

## Finding package dependencies
If you want to generate typings of a package but you are not sure how you can get all the needed dependencies you can follow the steps bellow:

1. Open [dts-generator/build.gradle](dts-generator/build.gradle) file and locate `dependencies` part.
2. Add as a `testCompileOnly` dependency the one that you want to generate typings for:

    ```groovy
    dependencies {
        implementation 'org.apache.bcel:bcel:6.2'
        implementation 'commons-io:commons-io:2.6'
        implementation 'com.google.code.findbugs:findbugs:3.0.1'

        // add your dependency bellow
        testCompileOnly  "com.android.support:support-v4:27.0.1"
    }
    ```

3. Open the [dts-generator](dts-generator) folder in your terminal
4. Run the following command:

    ```
    ./gradlew extractAllJars
    ```

5. The command above will get the needed jar files for your dependency and will output them in the [dts-generator/jar-files](dts-generator/jar-files) folder (or you can optionaly pass another output folder `-PjarsOutput=another-folder`)
6. You can run the following command to check what are the dependencies between the packages:

    ```
    ./gradlew dependencies --configuration testCompileOnly
    ```

7. Run the dts-generator tool passing as **input** arguments the path to the output jars folder

## Androidx specifics

To get all the jar files for androidx follow the steps above. You can find the **jar** files for androidx 1.0.0 in [the current repository](libs/androidx/1.0.0)
As androidx needs the base android jar file to create its typings you need to pass the android.jar file as a **super** parameter to the generator. To avoid having typings for every different API level you can reuse typings built with API level 17 for all API levels until 23. It's quite easy to test this:

1. Run the typings generator for androidx passing **android-17/android.jar** as a supper jar
2. Add `/// <reference path="android-17.d.ts"/>` at the top of the generated typings file where android-17.d.ts is the typings file of the android API level 17
3. Run `tsc` passing the generated typings file and there shouldn't be errors
4. Now start replacing the reference file with the files from other API level while the `tsc` execution completes with no error
5. If there's an error this means that you need to generate the android support typings with the same android API level super jar

By repeating the steps above we've found that:

- Androidx 17 typings(built with supper jar from android API 17) can be reused until android API 22
- Androidx 23 typings(built with supper jar from android API 23) can be reused until android API 25
- Androidx 26 typings(built with supper jar from android API 26) can be reused for API 26 and 27

The corresponding typings files can be found in the [tns-platform-declarations](https://github.com/NativeScript/NativeScript/tree/master/tns-platform-declarations) package. The repo's [Makefile](Makefile) can be used as a reference for creating these typings files
