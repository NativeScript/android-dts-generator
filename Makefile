android-platform-17:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-17/android.jar
	mv out/android.d.ts out/android-platform-17.d.ts

android-platform-18:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-18/android.jar
	mv out/android.d.ts out/android-platform-18.d.ts

android-platform-19:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-19/android.jar
	mv out/android.d.ts out/android-platform-19.d.ts

android-platform-20:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-20/android.jar
	mv out/android.d.ts out/android-platform-20.d.ts

android-platform-21:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-21/android.jar
	mv out/android.d.ts out/android-platform-21.d.ts

android-platform-22:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-22/android.jar
	mv out/android.d.ts out/android-platform-22.d.ts

android-platform-23:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-23/android.jar
	mv out/android.d.ts out/android-platform-23.d.ts

android-platform-24:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-24/android.jar
	mv out/android.d.ts out/android-platform-24.d.ts

android-platform-25:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-25/android.jar
	mv out/android.d.ts out/android-platform-25.d.ts

android-platform-26:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-26/android.jar
	mv out/android.d.ts out/android-platform-26.d.ts

android-platform-27:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-27/android.jar
	mv out/android.d.ts out/android-platform-27.d.ts

android-platform-28:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-28/android.jar
	mv out/android.d.ts out/android-platform-28.d.ts

android-platform-all: android-platform-17 android-platform-18 android-platform-19 android-platform-20 android-platform-21 \
	android-platform-22 android-platform-23 android-platform-24 android-platform-25 android-platform-26 android-platform-27 \
	android-platform-28

android-support-17:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input libs/android-support/27.0.1 -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-17/android.jar -skip-declarations
	mv out/android.d.ts out/android-support-17.d.ts

android-support-23:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input libs/android-support/27.0.1 -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-23/android.jar -skip-declarations
	mv out/android.d.ts out/android-support-23.d.ts

android-support-26:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input libs/android-support/27.0.1 -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-26/android.jar -skip-declarations
	mv out/android.d.ts out/android-support-26.d.ts

android-support-28:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input libs/android-support/27.0.1 -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-28/android.jar -skip-declarations
	mv out/android.d.ts out/android-support-28.d.ts

android-support-all: android-support-17 android-support-23 android-support-26 android-support-28