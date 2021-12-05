import {all} from "redux-saga/effects"
import { themeSwitcherSaga } from "../common/themeSaga";
import { personalHomepageSaga } from "../features/personalHomepage/personalHomepageSage";


export default function* saga() {
    yield all ([
        personalHomepageSaga(),
        themeSwitcherSaga(),
    ]);
}