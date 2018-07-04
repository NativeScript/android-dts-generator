android-17:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-17/android.jar
	mv out/android.d.ts out/android-17.d.ts

android-18:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-18/android.jar
	mv out/android.d.ts out/android-18.d.ts

android-19:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-19/android.jar
	mv out/android.d.ts out/android-19.d.ts

android-20:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-20/android.jar
	mv out/android.d.ts out/android-20.d.ts

android-21:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-21/android.jar
	mv out/android.d.ts out/android-21.d.ts

android-22:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-22/android.jar
	mv out/android.d.ts out/android-22.d.ts

android-23:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-23/android.jar
	mv out/android.d.ts out/android-23.d.ts

android-24:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-24/android.jar
	mv out/android.d.ts out/android-24.d.ts

android-25:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-25/android.jar
	mv out/android.d.ts out/android-25.d.ts

android-26:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-26/android.jar
	mv out/android.d.ts out/android-26.d.ts

android-27:
	java -jar dts-generator/build/libs/dts-generator.jar -input ~/Library/Android/sdk/platforms/android-27/android.jar
	mv out/android.d.ts out/android-27.d.ts

android-all: android-17 android-18 android-19 android-20 android-21 android-22 android-23 android-24 android-25 android-26 android-27

android-support-17:
	java -jar dts-generator/build/libs/dts-generator.jar \
	-input libs/android-support/27.0.1/android-support-v4.jar \libs/android-support/27.0.1/android-support-design.jar \
	libs/android-support/27.0.1/android-support-v7-appcompat.jar libs/android-support/27.0.1/android-support-core-ui.jar \
	libs/android-support/27.0.1/android-support-recyclerview-v7.jar libs/android-support/27.0.1/android-support-transition.jar \
	libs/android-support/27.0.1/android-support-media-compat.jar libs/android-support/27.0.1/android-support-fragment.jar \
	libs/android-support/27.0.1/android-support-core-utils.jar libs/android-support/27.0.1/android-support-animated-vector-drawable.jar \
	libs/android-support/27.0.1/android-support-vector-drawable.jar libs/android-support/27.0.1/android-support-compat.jar \
	libs/android-support/27.0.1/android-support-annotations.jar libs/android-support/27.0.1/android-support-multidex.jar \
	-input-generics libs/generics.txt -super /Users/trifonov/Library/Android/sdk/platforms/android-17/android.jar
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
	-input-generics libs/generics.txt -super /Users/trifonov/Library/Android/sdk/platforms/android-23/android.jar
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
	-input-generics libs/generics.txt -super /Users/trifonov/Library/Android/sdk/platforms/android-26/android.jar
	mv out/android.d.ts out/android-support-26.d.ts

android-support-all: android-support-17 android-support-23 android-support-26