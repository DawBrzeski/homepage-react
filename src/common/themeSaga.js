import { call, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects"
import { getThemeFromLocalStorage, saveThemeInLocalStorage } from "./themeLocalStorage"
import { getThemeState, selectIsDarkTheme, toggleTheme } from "./themeSlice"

function* saveThemeInLocalStorageHandler() {
    const isThemeDark = yield select(selectIsDarkTheme)
    yield call(saveThemeInLocalStorage, isThemeDark)
}

function* getThemeFromLocalStorageHandler(){
    const isThemeDark = yield call(getThemeFromLocalStorage);
    yield put(toggleTheme(isThemeDark))
}

export function* themeSwitcherSaga() {
    yield takeLatest(toggleTheme.type, saveThemeInLocalStorageHandler);
    yield takeLatest(getThemeState.type, getThemeFromLocalStorageHandler);
}