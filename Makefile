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

android-platform-29:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-29/android.jar
	mv out/android.d.ts out/android-platform-29.d.ts

android-platform-30:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-30/android.jar
	mv out/android.d.ts out/android-platform-30.d.ts

android-platform-31:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-31/android.jar
	mv out/android.d.ts out/android-platform-31.d.ts

android-platform-32:
	java -jar dts-generator/build/libs/dts-generator.jar -input ${ANDROID_HOME}/platforms/android-32/android.jar
	mv out/android.d.ts out/android-platform-32.d.ts

android-platform-all: android-platform-17 android-platform-18 android-platform-19 android-platform-20 android-platform-21 \
	android-platform-22 android-platform-23 android-platform-24 android-platform-25 android-platform-26 android-platform-27 \
	android-platform-28 android-platform-29 android-platform-30 android-platform-31 android-platform-32

androidx-17:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input dts-generator/jar-files/ -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-17/android.jar -skip-declarations
	mv out/android.d.ts out/androidx-17.d.ts

androidx-23:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input dts-generator/jar-files/ -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-23/android.jar -skip-declarations
	mv out/android.d.ts out/androidx-23.d.ts

androidx-26:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input dts-generator/jar-files/ -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-26/android.jar -skip-declarations
	mv out/android.d.ts out/androidx-26.d.ts

androidx-28:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input dts-generator/jar-files/ -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-28/android.jar -skip-declarations
	mv out/android.d.ts out/androidx-28.d.ts

androidx-29:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input dts-generator/jar-files/ -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-29/android.jar -skip-declarations
	mv out/android.d.ts out/androidx-29.d.ts

androidx-30:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input dts-generator/jar-files/ -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-30/android.jar -skip-declarations
	mv out/android.d.ts out/androidx-30.d.ts

androidx-31:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input dts-generator/jar-files/ -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-31/android.jar -skip-declarations
	mv out/android.d.ts out/androidx-31.d.ts
	
androidx-32:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input dts-generator/jar-files/ -input-generics libs/generics.txt \
	-super ${ANDROID_HOME}/platforms/android-32/android.jar -skip-declarations
	mv out/android.d.ts out/androidx-32.d.ts

test-compare-output:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input libs
	cmp out/android.d.ts test/expected-output/android.d.ts
	cmp out/android-declarations.d.ts test/expected-output/android-declarations.d.ts

androidx-all: androidx-17 androidx-23 androidx-26 androidx-28 androidx-29 androidx-30 androidx-31 androidx-32
