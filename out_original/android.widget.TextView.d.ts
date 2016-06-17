/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.content.Context.d.ts" />
/// <reference path="./android.content.res.ColorStateList.d.ts" />
/// <reference path="./android.content.res.Configuration.d.ts" />
/// <reference path="./android.graphics.Canvas.d.ts" />
/// <reference path="./android.graphics.Rect.d.ts" />
/// <reference path="./android.graphics.Typeface.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />
/// <reference path="./android.os.Bundle.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.os.Parcelable.d.ts" />
/// <reference path="./android.text.Editable.d.ts" />
/// <reference path="./android.text.InputFilter.d.ts" />
/// <reference path="./android.text.Layout.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./android.text.TextWatcher.d.ts" />
/// <reference path="./android.text.method.KeyListener.d.ts" />
/// <reference path="./android.text.method.MovementMethod.d.ts" />
/// <reference path="./android.text.method.TransformationMethod.d.ts" />
/// <reference path="./android.text.style.URLSpan.d.ts" />
/// <reference path="./android.util.AttributeSet.d.ts" />
/// <reference path="./android.view.DragEvent.d.ts" />
/// <reference path="./android.view.KeyEvent.d.ts" />
/// <reference path="./android.view.MotionEvent.d.ts" />
/// <reference path="./android.view.View.d.ts" />
/// <reference path="./android.view.ViewStructure.d.ts" />
/// <reference path="./android.view.inputmethod.CompletionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.CorrectionInfo.d.ts" />
/// <reference path="./android.view.inputmethod.EditorInfo.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedText.d.ts" />
/// <reference path="./android.view.inputmethod.ExtractedTextRequest.d.ts" />
/// <reference path="./android.view.inputmethod.InputConnection.d.ts" />
/// <reference path="./android.widget.Scroller.d.ts" />
/// <reference path="./java.lang.CharSequence.d.ts" />
/// <reference path="./java.lang.Class.d.ts" />
/// <reference path="./java.lang.Enum.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.ArrayList.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module widget {
		export class TextView {
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public constructor();
			public constructor(param0: android.content.Context);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
			public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
			public setEnabled(param0: boolean): void;
			public setTypeface(param0: android.graphics.Typeface, param1: number): void;
			public getDefaultEditable(): boolean;
			public getDefaultMovementMethod(): android.text.method.MovementMethod;
			public getText(): string;
			public length(): number;
			public getEditableText(): android.text.Editable;
			public getLineHeight(): number;
			public getLayout(): android.text.Layout;
			public getKeyListener(): android.text.method.KeyListener;
			public setKeyListener(param0: android.text.method.KeyListener): void;
			public getMovementMethod(): android.text.method.MovementMethod;
			public setMovementMethod(param0: android.text.method.MovementMethod): void;
			public getTransformationMethod(): android.text.method.TransformationMethod;
			public setTransformationMethod(param0: android.text.method.TransformationMethod): void;
			public getCompoundPaddingTop(): number;
			public getCompoundPaddingBottom(): number;
			public getCompoundPaddingLeft(): number;
			public getCompoundPaddingRight(): number;
			public getCompoundPaddingStart(): number;
			public getCompoundPaddingEnd(): number;
			public getExtendedPaddingTop(): number;
			public getExtendedPaddingBottom(): number;
			public getTotalPaddingLeft(): number;
			public getTotalPaddingRight(): number;
			public getTotalPaddingStart(): number;
			public getTotalPaddingEnd(): number;
			public getTotalPaddingTop(): number;
			public getTotalPaddingBottom(): number;
			public setCompoundDrawables(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable): void;
			public setCompoundDrawablesWithIntrinsicBounds(param0: number, param1: number, param2: number, param3: number): void;
			public setCompoundDrawablesWithIntrinsicBounds(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable): void;
			public setCompoundDrawablesRelative(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable): void;
			public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: number, param1: number, param2: number, param3: number): void;
			public setCompoundDrawablesRelativeWithIntrinsicBounds(param0: android.graphics.drawable.Drawable, param1: android.graphics.drawable.Drawable, param2: android.graphics.drawable.Drawable, param3: android.graphics.drawable.Drawable): void;
			public getCompoundDrawables(): native.Array<android.graphics.drawable.Drawable>;
			public getCompoundDrawablesRelative(): native.Array<android.graphics.drawable.Drawable>;
			public setCompoundDrawablePadding(param0: number): void;
			public getCompoundDrawablePadding(): number;
			public setCompoundDrawableTintList(param0: android.content.res.ColorStateList): void;
			public getCompoundDrawableTintList(): android.content.res.ColorStateList;
			public setCompoundDrawableTintMode(param0: android.graphics.PorterDuff.Mode): void;
			public getCompoundDrawableTintMode(): android.graphics.PorterDuff.Mode;
			public setPadding(param0: number, param1: number, param2: number, param3: number): void;
			public setPaddingRelative(param0: number, param1: number, param2: number, param3: number): void;
			public getAutoLinkMask(): number;
			public setTextAppearance(param0: number): void;
			public setTextAppearance(param0: android.content.Context, param1: number): void;
			public getTextLocale(): java.util.Locale;
			public setTextLocale(param0: java.util.Locale): void;
			public onConfigurationChanged(param0: android.content.res.Configuration): void;
			public getTextSize(): number;
			public setTextSize(param0: number): void;
			public setTextSize(param0: number, param1: number): void;
			public getTextScaleX(): number;
			public setTextScaleX(param0: number): void;
			public setTypeface(param0: android.graphics.Typeface): void;
			public getTypeface(): android.graphics.Typeface;
			public setElegantTextHeight(param0: boolean): void;
			public getLetterSpacing(): number;
			public setLetterSpacing(param0: number): void;
			public getFontFeatureSettings(): string;
			public setBreakStrategy(param0: number): void;
			public getBreakStrategy(): number;
			public setHyphenationFrequency(param0: number): void;
			public getHyphenationFrequency(): number;
			public setFontFeatureSettings(param0: string): void;
			public setTextColor(param0: number): void;
			public setTextColor(param0: android.content.res.ColorStateList): void;
			public getTextColors(): android.content.res.ColorStateList;
			public getCurrentTextColor(): number;
			public setHighlightColor(param0: number): void;
			public getHighlightColor(): number;
			public setShowSoftInputOnFocus(param0: boolean): void;
			public getShowSoftInputOnFocus(): boolean;
			public setShadowLayer(param0: number, param1: number, param2: number, param3: number): void;
			public getShadowRadius(): number;
			public getShadowDx(): number;
			public getShadowDy(): number;
			public getShadowColor(): number;
			public getPaint(): android.text.TextPaint;
			public setAutoLinkMask(param0: number): void;
			public setLinksClickable(param0: boolean): void;
			public getLinksClickable(): boolean;
			public getUrls(): native.Array<android.text.style.URLSpan>;
			public setHintTextColor(param0: number): void;
			public setHintTextColor(param0: android.content.res.ColorStateList): void;
			public getHintTextColors(): android.content.res.ColorStateList;
			public getCurrentHintTextColor(): number;
			public setLinkTextColor(param0: number): void;
			public setLinkTextColor(param0: android.content.res.ColorStateList): void;
			public getLinkTextColors(): android.content.res.ColorStateList;
			public setGravity(param0: number): void;
			public getGravity(): number;
			public getPaintFlags(): number;
			public setPaintFlags(param0: number): void;
			public setHorizontallyScrolling(param0: boolean): void;
			public setMinLines(param0: number): void;
			public getMinLines(): number;
			public setMinHeight(param0: number): void;
			public getMinHeight(): number;
			public setMaxLines(param0: number): void;
			public getMaxLines(): number;
			public setMaxHeight(param0: number): void;
			public getMaxHeight(): number;
			public setLines(param0: number): void;
			public setHeight(param0: number): void;
			public setMinEms(param0: number): void;
			public getMinEms(): number;
			public setMinWidth(param0: number): void;
			public getMinWidth(): number;
			public setMaxEms(param0: number): void;
			public getMaxEms(): number;
			public setMaxWidth(param0: number): void;
			public getMaxWidth(): number;
			public setEms(param0: number): void;
			public setWidth(param0: number): void;
			public setLineSpacing(param0: number, param1: number): void;
			public getLineSpacingMultiplier(): number;
			public getLineSpacingExtra(): number;
			public append(param0: string): void;
			public append(param0: string, param1: number, param2: number): void;
			public drawableStateChanged(): void;
			public drawableHotspotChanged(param0: number, param1: number): void;
			public onSaveInstanceState(): android.os.Parcelable;
			public onRestoreInstanceState(param0: android.os.Parcelable): void;
			public setFreezesText(param0: boolean): void;
			public getFreezesText(): boolean;
			public setEditableFactory(param0: android.text.Editable.Factory): void;
			public setSpannableFactory(param0: android.text.Spannable.Factory): void;
			public setText(param0: string): void;
			public setTextKeepState(param0: string): void;
			public setText(param0: string, param1: android.widget.TextView.BufferType): void;
			public setText(param0: native.Array<string>, param1: number, param2: number): void;
			public setTextKeepState(param0: string, param1: android.widget.TextView.BufferType): void;
			public setText(param0: number): void;
			public setText(param0: number, param1: android.widget.TextView.BufferType): void;
			public setHint(param0: string): void;
			public setHint(param0: number): void;
			public getHint(): string;
			public setInputType(param0: number): void;
			public setRawInputType(param0: number): void;
			public getInputType(): number;
			public setImeOptions(param0: number): void;
			public getImeOptions(): number;
			public setImeActionLabel(param0: string, param1: number): void;
			public getImeActionLabel(): string;
			public getImeActionId(): number;
			public setOnEditorActionListener(param0: android.widget.TextView.OnEditorActionListener): void;
			public onEditorAction(param0: number): void;
			public setPrivateImeOptions(param0: string): void;
			public getPrivateImeOptions(): string;
			public setInputExtras(param0: number): void;
			public getInputExtras(param0: boolean): android.os.Bundle;
			public getError(): string;
			public setError(param0: string): void;
			public setError(param0: string, param1: android.graphics.drawable.Drawable): void;
			public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;
			public setFilters(param0: native.Array<android.text.InputFilter>): void;
			public getFilters(): native.Array<android.text.InputFilter>;
			public onPreDraw(): boolean;
			public onAttachedToWindow(): void;
			public onScreenStateChanged(param0: number): void;
			public isPaddingOffsetRequired(): boolean;
			public getLeftPaddingOffset(): number;
			public getTopPaddingOffset(): number;
			public getBottomPaddingOffset(): number;
			public getRightPaddingOffset(): number;
			public verifyDrawable(param0: android.graphics.drawable.Drawable): boolean;
			public jumpDrawablesToCurrentState(): void;
			public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
			public hasOverlappingRendering(): boolean;
			public isTextSelectable(): boolean;
			public setTextIsSelectable(param0: boolean): void;
			public onCreateDrawableState(param0: number): native.Array<number>;
			public onDraw(param0: android.graphics.Canvas): void;
			public getFocusedRect(param0: android.graphics.Rect): void;
			public getLineCount(): number;
			public getLineBounds(param0: number, param1: android.graphics.Rect): number;
			public getBaseline(): number;
			public onKeyPreIme(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
			public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
			public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
			public onCheckIsTextEditor(): boolean;
			public onCreateInputConnection(param0: android.view.inputmethod.EditorInfo): android.view.inputmethod.InputConnection;
			public extractText(param0: android.view.inputmethod.ExtractedTextRequest, param1: android.view.inputmethod.ExtractedText): boolean;
			public setExtractedText(param0: android.view.inputmethod.ExtractedText): void;
			public onCommitCompletion(param0: android.view.inputmethod.CompletionInfo): void;
			public onCommitCorrection(param0: android.view.inputmethod.CorrectionInfo): void;
			public beginBatchEdit(): void;
			public endBatchEdit(): void;
			public onBeginBatchEdit(): void;
			public onEndBatchEdit(): void;
			public onPrivateIMECommand(param0: string, param1: android.os.Bundle): boolean;
			public setIncludeFontPadding(param0: boolean): void;
			public getIncludeFontPadding(): boolean;
			public onMeasure(param0: number, param1: number): void;
			public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			public bringPointIntoView(param0: number): boolean;
			public moveCursorToVisibleOffset(): boolean;
			public computeScroll(): void;
			public debug(param0: number): void;
			public getSelectionStart(): number;
			public getSelectionEnd(): number;
			public hasSelection(): boolean;
			public setSingleLine(): void;
			public setAllCaps(param0: boolean): void;
			public setSingleLine(param0: boolean): void;
			public setEllipsize(param0: android.text.TextUtils.TruncateAt): void;
			public setMarqueeRepeatLimit(param0: number): void;
			public getMarqueeRepeatLimit(): number;
			public getEllipsize(): android.text.TextUtils.TruncateAt;
			public setSelectAllOnFocus(param0: boolean): void;
			public setCursorVisible(param0: boolean): void;
			public isCursorVisible(): boolean;
			public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
			public onSelectionChanged(param0: number, param1: number): void;
			public addTextChangedListener(param0: android.text.TextWatcher): void;
			public removeTextChangedListener(param0: android.text.TextWatcher): void;
			public onStartTemporaryDetach(): void;
			public onFinishTemporaryDetach(): void;
			public onFocusChanged(param0: boolean, param1: number, param2: android.graphics.Rect): void;
			public onWindowFocusChanged(param0: boolean): void;
			public onVisibilityChanged(param0: android.view.View, param1: number): void;
			public clearComposingText(): void;
			public setSelected(param0: boolean): void;
			public onTouchEvent(param0: android.view.MotionEvent): boolean;
			public onGenericMotionEvent(param0: android.view.MotionEvent): boolean;
			public didTouchFocusSelect(): boolean;
			public cancelLongPress(): void;
			public onTrackballEvent(param0: android.view.MotionEvent): boolean;
			public setScroller(param0: android.widget.Scroller): void;
			public getLeftFadingEdgeStrength(): number;
			public getRightFadingEdgeStrength(): number;
			public computeHorizontalScrollRange(): number;
			public computeVerticalScrollRange(): number;
			public computeVerticalScrollExtent(): number;
			public findViewsWithText(param0: java.util.ArrayList, param1: string, param2: number): void;
			public onKeyShortcut(param0: number, param1: android.view.KeyEvent): boolean;
			public getAccessibilityClassName(): string;
			public onProvideStructure(param0: android.view.ViewStructure): void;
			public isInputMethodTarget(): boolean;
			public onTextContextMenuItem(param0: number): boolean;
			public performLongClick(): boolean;
			public onScrollChanged(param0: number, param1: number, param2: number, param3: number): void;
			public isSuggestionsEnabled(): boolean;
			public setCustomSelectionActionModeCallback(param0: android.view.ActionMode.Callback): void;
			public getCustomSelectionActionModeCallback(): android.view.ActionMode.Callback;
			public setCustomInsertionActionModeCallback(param0: android.view.ActionMode.Callback): void;
			public getCustomInsertionActionModeCallback(): android.view.ActionMode.Callback;
			public getOffsetForPosition(param0: number, param1: number): number;
			public onDragEvent(param0: android.view.DragEvent): boolean;
			public onRtlPropertiesChanged(param0: number): void;
		}
		export module TextView {
			export class BufferType {
				public static values(): native.Array<android.widget.TextView.BufferType>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static valueOf(param0: string): android.widget.TextView.BufferType;
				public static EDITABLE: android.widget.TextView.BufferType;
				public static NORMAL: android.widget.TextView.BufferType;
				public static SPANNABLE: android.widget.TextView.BufferType;
			}
			export class OnEditorActionListener {
				public onEditorAction(param0: android.widget.TextView, param1: number, param2: android.view.KeyEvent): boolean;
			}
			export class SavedState {
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public toString(): string;
				public static CREATOR: android.os.Parcelable.Creator;
			}
		}
	}
}
