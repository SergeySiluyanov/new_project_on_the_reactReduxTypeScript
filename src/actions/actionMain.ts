import { ACTION_GET_MESSAGE } from './index';

export function actionMain(articleId) {
    return {
        type: ACTION_GET_MESSAGE,
        data:  "Application created!! "
    };
}