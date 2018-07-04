android-platform-17:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-17/android.jar
	mv out/android.d.ts out/android-platform-17.d.ts

android-platform-18:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-18/android.jar
	mv out/android.d.ts out/android-platform-18.d.ts

android-platform-19:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-19/android.jar
	mv out/android.d.ts out/android-platform-19.d.ts

android-platform-20:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-20/android.jar
	mv out/android.d.ts out/android-platform-20.d.ts

android-platform-21:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-21/android.jar
	mv out/android.d.ts out/android-platform-21.d.ts

android-platform-22:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-22/android.jar
	mv out/android.d.ts out/android-platform-22.d.ts

android-platform-23:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-23/android.jar
	mv out/android.d.ts out/android-platform-23.d.ts

android-platform-24:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-24/android.jar
	mv out/android.d.ts out/android-platform-24.d.ts

android-platform-25:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-25/android.jar
	mv out/android.d.ts out/android-platform-25.d.ts

android-platform-26:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-26/android.jar
	mv out/android.d.ts out/android-platform-26.d.ts

android-platform-27:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-27/android.jar
	mv out/android.d.ts out/android-platform-27.d.ts

android-platform-all: android-platform-17 android-platform-18 android-platform-19 android-platform-20 android-platform-21 \
	android-platform-22 android-platform-23 android-platform-24 android-platform-25 android-platform-26 android-platform-27

android-support-17:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input libs/android-support/27.0.1/android-support-v4.jar \libs/android-support/27.0.1/android-support-design.jar \
	libs/android-support/27.0.1/android-support-v7-appcompat.jar libs/android-support/27.0.1/android-support-core-ui.jar \
	libs/android-support/27.0.1/android-support-recyclerview-v7.jar libs/android-support/27.0.1/android-support-transition.jar \
	libs/android-support/27.0.1/android-support-media-compat.jar libs/android-support/27.0.1/android-support-fragment.jar \
	libs/android-support/27.0.1/android-support-core-utils.jar libs/android-support/27.0.1/android-support-animated-vector-drawable.jar \
	libs/android-support/27.0.1/android-support-vector-drawable.jar libs/android-support/27.0.1/android-support-compat.jar \
	libs/android-support/27.0.1/android-support-annotations.jar libs/android-support/27.0.1/android-support-multidex.jar \
	-all-generic-implements -input-generics libs/generics.txt -super /Users/trifonov/Library/Android/sdk/platforms/android-17/android.jar
	mv out/android.d.ts out/android-support-17.d.ts

android-support-23:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input libs/android-support/27.0.1/android-support-v4.jar \libs/android-support/27.0.1/android-support-design.jar \
	libs/android-support/27.0.1/android-support-v7-appcompat.jar libs/android-support/27.0.1/android-support-core-ui.jar \
	libs/android-support/27.0.1/android-support-recyclerview-v7.jar libs/android-support/27.0.1/android-support-transition.jar \
	libs/android-support/27.0.1/android-support-media-compat.jar libs/android-support/27.0.1/android-support-fragment.jar \
	libs/android-support/27.0.1/android-support-core-utils.jar libs/android-support/27.0.1/android-support-animated-vector-drawable.jar \
	libs/android-support/27.0.1/android-support-vector-drawable.jar libs/android-support/27.0.1/android-support-compat.jar \
	libs/android-support/27.0.1/android-support-annotations.jar libs/android-support/27.0.1/android-support-multidex.jar \
	-all-generic-implements -input-generics libs/generics.txt -super /Users/trifonov/Library/Android/sdk/platforms/android-23/android.jar
	mv out/android.d.ts out/android-support-23.d.ts

android-support-26:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input libs/android-support/27.0.1/android-support-v4.jar \libs/android-support/27.0.1/android-support-design.jar \
	libs/android-support/27.0.1/android-support-v7-appcompat.jar libs/android-support/27.0.1/android-support-core-ui.jar \
	libs/android-support/27.0.1/android-support-recyclerview-v7.jar libs/android-support/27.0.1/android-support-transition.jar \
	libs/android-support/27.0.1/android-support-media-compat.jar libs/android-support/27.0.1/android-support-fragment.jar \
	libs/android-support/27.0.1/android-support-core-utils.jar libs/android-support/27.0.1/android-support-animated-vector-drawable.jar \
	libs/android-support/27.0.1/android-support-vector-drawable.jar libs/android-support/27.0.1/android-support-compat.jar \
	libs/android-support/27.0.1/android-support-annotations.jar libs/android-support/27.0.1/android-support-multidex.jar \
	-all-generic-implements -input-generics libs/generics.txt -super /Users/trifonov/Library/Android/sdk/platforms/android-26/android.jar
	mv out/android.d.ts out/android-support-26.d.ts

android-support-all: android-support-17 android-support-23 android-support-26