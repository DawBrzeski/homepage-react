import {all} from "redux-saga/effects"
import { personalHomepageSaga } from "../features/personalHomepage/personalHomepageSage";


export default function* saga() {
    yield all ([
        personalHomepageSaga(),
    ]);
}