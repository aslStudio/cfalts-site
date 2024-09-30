import { formApi } from "@/shared/api";
import { createInstanceStore } from "@/shared/lib/effector/createInstanceStore";
import { reducers } from "@/shared/lib/effector/reducers";
import { createEffect, createEvent, createStore, sample } from "effector";
import { useUnit } from "effector-react";

const onSuccess = createInstanceStore(() => {})
const onError = createInstanceStore(() => {})

const sendFormFx = createEffect(formApi.send)

const topicUpdated = createEvent<''>()
const emailUpdated = createEvent<''>()
const messageUpdated = createEvent<''>()
const reset = createEvent()
const formSended = createEvent()

const $isLoading = sendFormFx.pending

const $topic = createStore('')
    .on(topicUpdated, reducers.pipe)
    .reset(reset)
const $email = createStore('')
    .on(emailUpdated, reducers.pipe)
    .reset(reset)
const $message = createStore('')
    .on(messageUpdated, reducers.pipe)
    .reset(reset)

sample({
    source: {
        topic: $topic,
        email: $email,
        message: $message,
    },
    clock: formSended,
    target: sendFormFx
})

sample({
    clock: sendFormFx.doneData,
    filter: ({ error }) => !error,
    target: onSuccess.trigger
})

sample({
    clock: sendFormFx.doneData,
    filter: ({ error }) => error,
    target: onError.trigger,
})

export const formModel = {
    $topic,
    $email,
    $message,

    $isLoading,

    topicUpdated,
    emailUpdated,
    messageUpdated,

    onSuccess,
    onError,

    formSended
}