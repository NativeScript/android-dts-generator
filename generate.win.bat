start cmd.exe /C gen-gradle.win.bat

rmdir /s /q output

mkdir output\android-21
mkdir output\android-22
mkdir output\android-23
mkdir output\android-24

java -jar dts-generator\build\libs\dts-generator.jar -input %ANDROID_HOME%\platforms\android-21\android.jar dts-generator\jars\21.0.3\internal-v4.jar dts-generator\jars\21.0.3\v4.jar dts-generator\jars\21.0.3\v7.jar -output output\android-21

java -jar dts-generator\build\libs\dts-generator.jar -input %ANDROID_HOME%\platforms\android-22\android.jar dts-generator\jars\22.2.0\internal-v4.jar dts-generator\jars\22.2.0\v4.jar dts-generator\jars\22.2.0\v7.jar -output output\android-22

java -jar dts-generator\build\libs\dts-generator.jar -input %ANDROID_HOME%\platforms\android-23\android.jar dts-generator\jars\23.3.0\internal-v4.jar dts-generator\jars\23.3.0\v4.jar dts-generator\jars\23.3.0\v7.jar -output output\android-23

java -jar dts-generator\build\libs\dts-generator.jar -input %ANDROID_HOME%\platforms\android-24\android.jar dts-generator\jars\24.1.0\internal-v4.jar dts-generator\jars\24.1.0\v4.jar dts-generator\jars\24.1.0\v7.jar -output output\android-24

xcopy /f /y _helpers.d.ts output\android-21
xcopy /f /y _helpers.d.ts output\android-22
xcopy /f /y _helpers.d.ts output\android-23
xcopy /f /y _helpers.d.ts output\android-24